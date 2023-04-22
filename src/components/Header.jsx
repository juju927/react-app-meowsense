import React from 'react'
import ProfilePic from './ProfilePic'
import styles from './Header.module.css/'

const Header = (props) => {
  return (
    <div className={styles['container']}>
      <ProfilePic img={props.img} type={props.type}/>
      <h1 className={ styles['h1'] }>{props.name}</h1>
      {/* <Name name={props.name}/>    */}
      <i className={styles['font-size']}>{props.desc}</i> 
    </div>
  )
}

export default Header