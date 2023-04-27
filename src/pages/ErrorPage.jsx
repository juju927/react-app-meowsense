import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import peekCat from '../images/PeekCat.png'

const ErrorPage = () => {
  return (
    <>
      <div className={ styles['centered'] } >
        <div className={ styles['main-container']}>
          <p>u seem 2 b lost....</p><br />
          <NavLink to='/'><button>oh nyo</button></NavLink>
        </div>   
        <div className={ styles['bottom-right'] }>
          <img src={peekCat} className={ styles['peekimg'] }/>  
        </div>  
      </div>
    </>
  )
}

export default ErrorPage