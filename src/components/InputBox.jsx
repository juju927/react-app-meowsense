import React, { useRef } from 'react'
import styles from './InputBox.module.css'
import sendButton from '../images/PawSend.png'

const InputBox = (props) => {
  const textAreaRef = useRef()

  const handleChange = (e) => {
    console.log(e.target.scrollHeight) 
    // 24 per, 31 start
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }

  return (
    <div className={ styles['userinputarea'] }>
      <textarea className={ styles['textarea']} 
      ref={textAreaRef}
      placeholder='Write a message...'
      rows={1}
      onChange={handleChange}
      ></textarea>
      <button className={ styles['sendbutton'] }><img src={sendButton} ></img></button>
    </div>

  )
}

export default InputBox