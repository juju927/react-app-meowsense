import React from 'react'
import { NavLink } from "react-router-dom"
import styles from './BackButton.module.css'
import backButton from '../images/BackButton.png'

const BackButton = () => {
  return (
    <div className={ styles['divrelative'] }>
      <NavLink to='/'>
        <button className={ styles['backbutton']}>
          <img className={ styles['back-button-img'] } src={backButton} />
        </button>
      </NavLink>
    </div>
  )
}

export default BackButton