import React from 'react'
import ProfilePic from './ProfilePic'
import styles from './ChatListItem.module.css'

const ChatListItem = (props) => {

  return (
    <div className={ styles['chatlist-item-container'] } onClick={()=> console.log(props.navLink)}>
      <ProfilePic type='chatlistpfp' img={props.img} />
      <div className={ styles['left'] }>
        <h1 className={ styles['name'] }>{props.name}</h1>
        <i>powered by <a href={props.apiLink} target="_blank">{props.api}</a></i>
      </div>
    </div>
  )
}

export default ChatListItem