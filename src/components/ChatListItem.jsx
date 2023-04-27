import React from 'react'
import { NavLink } from "react-router-dom"
import ProfilePic from './ProfilePic'
import styles from './ChatListItem.module.css'

const ChatListItem = (props) => {
  
  return (
    <NavLink to={props.navLink} className={ styles['navlink'] }>
      <div className={ styles['chatlist-item-container'] }>
        <ProfilePic type='chatlistpfp' img={props.img} />
        <div className={ styles['left'] }>
          <h1 className={ styles['name'] }>{props.name}</h1>
          <i>powered by <a href={props.apiLink} target="_blank" onClick={(e)=> e.stopPropagation()}>{props.api}</a></i>
        </div>
      </div>
    </NavLink>  
  )
}

export default ChatListItem