import React from 'react'
import ProfilePic from './ProfilePic'
import Name from './Name'
import styles from './Header.module.css/'

const Header = (props) => {
  return (
    <div className={styles['container']}>
      <ProfilePic img={props.img} type={props.type}/>
      <Name name={props.name}/>   
      <i className={styles['font-size']}>{props.desc}</i> 
    </div>
  )
}

export default Header