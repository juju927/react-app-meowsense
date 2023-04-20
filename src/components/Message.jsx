import React from 'react'
import styles from './Message.module.css'

const Message = (props) => {
  // props.content sender: cat/user, // stretch- time: time, (no tail, overlay time)
  // /ᐠ. ｡.ᐟ\ᵐᵉᵒʷˎˊ˗

  return (
    <div className={ styles.messageBubble }>
      { props.sender == 'user' ? 
      `${props.content}` : 
      <img src={props.content}></img> }
      {/* /ᐠ. ｡.ᐟ\ᵐᵉᵒʷˎˊ˗ */}
    </div>
  )
}

export default Message
