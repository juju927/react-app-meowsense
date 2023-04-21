import React, { useRef } from 'react'
import styles from './InputBox.module.css'
import sendButton from '../images/PawSend.png'

const InputBox = (props) => {
  const textAreaRef = useRef()

  const handleChange = (e) => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }

  const handleClick = () => {
    props.setChatlogs(currentLog => 
      [...currentLog, 
        {'sender': 'user', 'type': 'text', 'content': textAreaRef.current.value}])
    textAreaRef.current.value = null;
  }



  return (
    <div className={ styles['userinputarea'] }>
      <textarea className={ styles['textarea']} 
      ref={textAreaRef}
      placeholder='Write a message...'
      rows={1}
      maxLength="500"
      onChange={handleChange}
      ></textarea>
      <button className={ styles['sendbutton'] } onClick={handleClick}><img className={ styles['paw-button-img'] } src={sendButton} ></img></button>
    </div>

  )
}

export default InputBox