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

  const [chatlogs, setChatlogs] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': '/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗'},
    {'sender': 'user',
    'type': 'text',
    'content': 'dum cat'},
    {'sender': 'cat',
    'type': 'img',
    'content': 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80'}])
   
    
  return (
    <div className={ styles['fullscreen'] }>
      <div className='container'>
        <Header name={details['name']} img={details['img']} desc={details['desc']} type='chatpfp' />  
      </div>

      <div className={`container ${styles['chatarea']}`}>
        <Chat chatlogs={chatlogs} />
      </div>

      <div className='container'>
        <InputBox setChatlogs={setChatlogs} />
      </div>
    </div>
  )
}

export default MyCat