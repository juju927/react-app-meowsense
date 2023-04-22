import React, { useState, useRef, useEffect } from 'react'
import styles from './InputBox.module.css'
import sendButton from '../images/PawSend.png'

const InputBox = (props) => {
  const textAreaRef = useRef()
  const newMessage = useRef(false)

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      // prevent enter from going to next line in text area input
      e.preventDefault();
      // and cause it to imitate the clicking of submit button
      handleClick();
    }
  }

  const handleChange = (e) => {
    // allow size of text area to change with height of input
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }

  const handleClick = () => {
    // if text area is filled
    if (textAreaRef.current.value) {
      // newMessage switch to true, to allow useEffect codes to run
      newMessage.current = true;
      // update chatlog in MyCat.jsx
      props.setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'user', 'type': 'text', 'content': textAreaRef.current.value}];
        return updatedLog;
      })
      
    }
  }
  
  useEffect(() => {
    // checks that the change in chatlog was due to user sending a newMessage here
    // props.chatlog is also changed by getCat(), so useEffect will run when cat message sent
    // but we only want it to run if the most previous change was due to user sending message
    if (newMessage.current) {
      // api call for cat image
      props.getCat();
      // reset the text area
      textAreaRef.current.value = null;
      newMessage.current = false;
    }
  }, [props.chatlog])

  return (
    <div className={ styles['userinputarea'] }>
      <textarea className={ styles['textarea']} 
      ref={textAreaRef}
      placeholder='Write a message...'
      rows={1}
      maxLength="500"
      onChange={handleChange}
      onKeyDown={handleEnter}
      ></textarea>
      <button className={ styles['sendbutton'] } onClick={handleClick}><img className={ styles['paw-button-img'] } src={sendButton} ></img></button>
    </div>

  )
}

export default InputBox