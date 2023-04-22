import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import styles from './Chat.module.css'

const Chat = (props) => {
  const bottomRef = useRef()

  useEffect(()=> {
    bottomRef.current.scrollIntoView()
  }, [props.chatlog])

  return(
  <div className={ styles['chatarea'] } >
  {props.chatlog.map((item, idx) => {
    return(
      <Message key={idx} sender={item.sender} type={item.type} content={item.content} />
    )
  })}
    <div ref={bottomRef} />
  </div>
  )
}

export default Chat