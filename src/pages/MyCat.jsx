import React, { useState } from 'react'
import pfp from '../images/MyCat.png'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import styles from './MyCat.module.css'
import Chat from '../components/Chat'

const MyCat = (props) => {
  const details = {
    'name': "Your Cat",
    'img': pfp,
    'desc': 'does not understand you'
  }

  const [chatlogs, setChatlogs] = useState([{
    'sender': 'user',
    'content': '/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗'}])

  return (
    <div className={ styles['fullscreen'] }>
      <div className='container'>
        <Header name={details['name']} img={details['img']} desc={details['desc']} type='chatpfp' />  
      </div>

      <div className={`container ${styles['chatarea']}`}>
        <Chat chatlogs={chatlogs} />
      </div>

      <div className='container'>
        <InputBox />
      </div>
    </div>


  )
}

export default MyCat