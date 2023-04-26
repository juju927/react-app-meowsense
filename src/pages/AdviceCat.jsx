import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import BackButton from '../components/BackButton'
import pfp from '../images/AdviceCat.png'
import styles from './Chatscreen.module.css'

const MyCat = () => {
  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': '/ᐠ_ ꞈ _ᐟ\\ɴʏᴀ~'},
     ])

  const [currentAdvice, setCurrentAdvice] = useState()
  const [newMessage, setNewMessage] = useState() 
     
  const details = {
    'name': "Catfucius",
    'img': pfp,
    'desc': 'wise cat of the pool'
  }

  const getRandomAdvice = async(nothingreally) => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();

    if (res.status === 200) {
      console.log("random advice data", data)
      if (data.slip.advice == currentAdvice) {
        setNewMessage("stop spamming >:( wisdom comes with patience...")
      } else {
        setNewMessage(data.slip.advice)
        setCurrentAdvice(data.slip.advice)
      }
    } else {
      const link = 'https://http.cat/' + res.status + '.jpg';
      setNewMessage(link)
    }
  }
  
  const getSearchedAdvice = async(prompt) => {
    if (prompt.includes("cat")) {
      setNewMessage(`“Cats rule the world.” – Jim Davis.
      ಇ/ᐠ ̥ᵔ  ̮  ᵔ ̥ ᐟ\\ಇ`)
    } else {
      const res = await fetch('https://api.adviceslip.com/advice/search/' + prompt)
      const data = await res.json();
  
      if (data.message) {
        setNewMessage("I don't think I have any words of wisdom about that...")
      } else {
        console.log('else data', data)
        const rand_idx = Math.floor(Math.random() * data.total_results);
        console.log(rand_idx)
        setNewMessage(data.slips[rand_idx].advice)
      }
    }
  }

  useEffect(()=> {
    if (newMessage) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'text', 'content': newMessage}];
        return updatedLog 
      })
      setNewMessage()
    }
  }, [newMessage])

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
        <InputBox chatlog={chatlog} setChatlog={setChatlog} useApi={getSearchedAdvice} getRandomAdvice={getRandomAdvice}/>
      </div>
    </div>
  )
}

export default MyCat