import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import BackButton from '../components/BackButton'
import pfp from '../images/MyCat.png'
import styles from './Chatscreen.module.css'

const MyCat = () => {
  // current cat picture to be added to the chat
  const [catPic, setCatPic] = useState()

  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': '/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗'},
 ])
 
  const details = {
    'name': "Your Cat",
    'img': pfp,
    'desc': 'does not understand you'
  }

  const getCat = async(nothinghonestly) => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search', {
          method: 'GET',
          headers: {
            'Content-Type': "application/json",
            'x-api-key': import.meta.env.VITE_THECATAPI_API_KEY,
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
        <BackButton />
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