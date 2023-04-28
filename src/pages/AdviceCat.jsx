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

  const [newMessage, setNewMessage] = useState() 
     
  const details = {
    'name': "Catfucius",
    'img': pfp,
    'desc': 'wise cat of the pool'
  }

  // sorry for the mess - i need it there to check, if the server ever comes back up :(
  // const getKeyword = async() => {
  //   const res = await fetch('https://api.cloudmersive.com/nlp-v2/pos/tag/nouns', {
  //     method: 'POST',
  //     timeout: 0,
  //     headers: {
  //       'Content-Type': "application/json",
  //       'Apikey': import.meta.env.VITE_CLOUDMERSIVE_API_KEY
  //     },
  //     data: {
  //       'InputText': "hello i am dOG"
  //     }
  //   })

  //   const data = await res.json();
  //   console.log('get keyword data', data)
  // }

  // const getSentiment = async() => {
  //   const res = await fetch('https://api.cloudmersive.com/nlp-v2/analytics/sentiment', {
  //     method: 'POST',
  //     timeout: 0,
  //     headers: {
  //       'Content-Type': "application/json",
  //       'Apikey': import.meta.env.VITE_CLOUDMERSIVE_API_KEY
  //     },
  //     data: {
  //       'InputText': "you are a dog"
  //     }
  //   })
  // }

  const getRandomAdvice = async(nothingreally="") => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();

    if (res.status === 200) {
      setNewMessage(data.slip.advice)
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
        setNewMessage("I don't think I have any words of wisdom about that specifically... but maybe you'll like this one - ")
        getRandomAdvice()

      } else {
        const rand_idx = Math.floor(Math.random() * data.total_results);
        setNewMessage(data.slips[rand_idx].advice)
      }
    }
  }

  const catify = (text) => {
    var newText = text;
    newText = newText.replace(/have|has/ig, 'haz')
    newText = newText.replace(/me|mo|mu|may|now/ig, 'meow')
    newText = newText.replace(/po|pu|aw/ig, 'paw')
    newText = newText.replace(/per/ig, 'purr')
    newText = newText.replace(/feeling/ig, 'feline')
    newText = newText.replace(/na/ig, 'nya')
    newText = newText.replace(/the/ig, 'teh')
    newText = newText.replace(/you/ig, 'chu')
    return newText
  }

  useEffect(()=> {
    if (newMessage) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'text', 'content': catify(newMessage)}];
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