import React from 'react'
import Message from './Message.jsx'
import styles from './Chat.module.css'

const Chat = (props) => {
  return(
  <div className={ styles['chatarea'] } >
  {props.chatlogs.map((item, idx) => {
    return(
      <Message key={idx} sender={item.sender} content={item.content} />
    )
  })}
  </div>
  )
}

export default Chat