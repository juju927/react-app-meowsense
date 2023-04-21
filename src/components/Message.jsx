import React from 'react'
import styles from './Message.module.css'

const Message = (props) => {
  // props.content sender: cat/user, // stretch- time: time, (no tail, overlay time)
  // /ᐠ. ｡.ᐟ\ᵐᵉᵒʷˎˊ˗

  return (
    <div className={ styles['message-container']}>
      <div className={`${(props.sender == 'user') ? styles['userMessage'] : styles['catMessage']} ${ (props.type == 'img') ? styles['imgMessage'] : styles['textMessage']}`}> 
        {props.type == 'text' ? 
        props.content :
        <img className={styles['message-img']} src={props.content}></img>}
      </div>    
    </div>
  )
}

export default Message
