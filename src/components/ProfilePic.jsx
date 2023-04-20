import React from 'react'
import styles from './ProfilePic.module.css'

const ProfilePic = (props) => {
  return (
    <>
      <img 
        className={ styles['profilepic'] } 
        src={props.img}
        style={`width:${props.width};height:${props.height}`}
      />
      <h1>hi this pfp compo</h1>
    </>
  )
}

export default ProfilePic