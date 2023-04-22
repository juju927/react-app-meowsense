import React from 'react'
import ProfilePic from './ProfilePic'
import styles from './ChatListItem.module.css'

const ChatListItem = (props) => {

  return (
    <div className={ styles['chatlist-item-container'] } onClick={()=> console.log(props.navlink)}>
      <ProfilePic type='chatlistpfp' img={props.img} />
      <div>
        <h1 className={ styles['name'] }>{props.name}</h1>
        <i>probably the last message or something</i>
      </div>
    </div>
  )
}

export default ChatListItem