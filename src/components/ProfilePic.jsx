import React from 'react'
import styles from './ProfilePic.module.css'

const ProfilePic = (props) => {
  return (
    <>
      {props.type == 'chatpfp' ? 
      <img 
      className={ styles['chatpfp'] } 
      src={props.img}/> :
      <img 
      className={ styles['chatlistpfp'] }
      src={props.img} />}

    </>
  )
}

export default ProfilePic