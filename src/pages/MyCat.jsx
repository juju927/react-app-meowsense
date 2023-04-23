import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import pfp from '../images/MyCat.png'
import backButton from '../images/BackButton.png'
import styles from './Chatscreen.module.css'

const MyCat = () => {
  const details = {
    'name': "Your Cat",
    'img': pfp,
    'desc': 'does not understand you'
  }

  // current cat picture to be added to the chat
  const [catPic, setCatPic] = useState()

  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': '/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗'},
    // {'sender': 'user',
    // 'type': 'text',
    // 'content': 'dum cat'},
    // {'sender': 'cat',
    // 'type': 'img',
    // 'content': 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80'}
  ])

  console.log('catapi key', import.meta.env.THECATAPI_API_KEY)

  const getCat = async(nothinghonestly) => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search', {
          method: 'GET',
          headers: {
            'Content-Type': "application/json",
            'x-api-key': import.meta.env.THECATAPI_API_KEY,
          },
        });
      
    const data = await res.json();
    
    if (res.status === 200) {
      data.map((item, idx) => {
        setCatPic(item.url)});
    } else {
      const link = 'https://http.cat/' + res.status + '.jpg';
      setCatPic(link)
    }
  }
  
  useEffect(()=> {
    if (catPic) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'img', 'content': catPic}];
        return updatedLog 
      })
    }
  }, [catPic])

  return (
    <div className={ styles['fullscreen'] }>
      <div className='container'>
        <NavLink to='/'><button className={ styles['backbutton'] }><img className={ styles['back-button-img'] } src={backButton} /></button></NavLink>
        <Header name={details['name']} img={details['img']} desc={details['desc']} type='chatpfp' />  
      </div>

      <div className={`container ${styles['chatarea']}`}>
        <Chat chatlog={chatlog} />
      </div>

      <div className='container'>
        <InputBox chatlog={chatlog} setChatlog={setChatlog} useApi={getCat} />
      </div>
    </div>
  )
}

export default MyCat