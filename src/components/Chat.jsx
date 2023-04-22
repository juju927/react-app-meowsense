import React from 'react'
import Message from './Message.jsx'
import styles from './Chat.module.css'

const Chat = (props) => {
  return(
  <div className={ styles['chatarea'] } >
  {props.chatlog.map((item, idx) => {
    return(
      <Message key={idx} sender={item.sender} type={item.type} content={item.content} />
    )
  })}
  </div>
  )
}

export default Chat