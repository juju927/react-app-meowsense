import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import BackButton from '../components/BackButton'
import pfp from '../images/DadCat.png'
import styles from './Chatscreen.module.css'

const JokeCat = () => {
  // current joke to be added to the chat
  const [joke, setJoke] = useState()

  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': 'Whatcha up to?（Φ ω Φ）'},
   ])

  const details = {
    'name': "Dad Cat",
    'img': pfp,
    'desc': '🤦🏻‍♀️'
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

  const getJoke = async() => {
    const res = await fetch('https://icanhazdadjoke.com/', {
          method: 'GET',
          headers: {
            'Accept': "application/json",
          },
        });
      
    const data = await res.json();
    
    if (res.status === 200) {
      setJoke(catify(data.joke))
    } else {
      const link = 'https://http.cat/' + res.status + '.jpg';
      setCatPic(link)
    }
  }

  useEffect(()=> {
    if (joke) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'text', 'content': joke}];
        return updatedLog 
      })
    }
  }, [joke])

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
        <InputBox chatlog={chatlog} setChatlog={setChatlog} useApi={getJoke} />
      </div>
    </div>
  )
}

export default JokeCat