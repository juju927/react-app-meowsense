import React, { useState } from 'react'
import pfp from '../images/ArtCat.png'
import backButton from '../images/BackButton.png'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import styles from './Chatscreen.module.css'

const ArtCat = () => {
  const details = {
    'name': "Leonyado da Kitty",
    'img': pfp,
    'desc': 'excellent artist - but be patient, art takes time'
  }

  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': 'Give me something to draw, nya! /ᐠ ̥  ̮  ̥ ᐟ\\ฅ'},
   ])


  return (
    <div className={ styles['fullscreen'] }>
      <div className='container'>
        <button className={ styles['backbutton'] }><img className={ styles['back-button-img'] } src={backButton} /></button>
        <Header name={details['name']} img={details['img']} desc={details['desc']} type='chatpfp' />  
      </div>

      <div className={`container ${styles['chatarea']}`}>
        <Chat chatlog={chatlog} />
      </div>

      <div className='container'>
        <InputBox chatlog={chatlog} setChatlog={setChatlog} />
      </div>
    </div>
  )
}

export default ArtCat