import React, { useState, useEffect } from 'react'
import { Configuration, OpenAIApi } from 'openai';
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import BackButton from '../components/BackButton';
import styles from './Chatscreen.module.css'
import pfp from '../images/ArtCat.png'


const ArtCat = () => {
  const [artPiece, setArtPiece] = useState()
  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': 'Give me something to draw, nya! /ᐠ ̥  ̮  ̥ ᐟ\\ฅ'},
   ])

  const details = {
    'name': "Leonyado da Kitty",
    'img': pfp,
    'desc': 'excellent artist - but be patient, art takes time'
  }

  const getArt = async(prompt) => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    const data = await response;

    if (response.status === 200) {
      data.data.data.map((item, idx) => {
        setArtPiece(item.url)})
    } else {
      const link = 'https://http.cat/' + response.status + '.jpg';
      setArtPiece(link)
    }
  }

  useEffect(()=> {
    if (artPiece) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'img', 'content': artPiece}];
        return updatedLog 
      })
    }
  }, [artPiece])

  return (
    <div className={ styles['fullscreen'] }>
      <div className={`container ${styles['divrelative']}`}>
        <BackButton />
        <Header name={details['name']} img={details['img']} desc={details['desc']} type='chatpfp' />  
      </div>

      <div className={`container ${styles['chatarea']}`}>
        <Chat chatlog={chatlog} />
      </div>
    
      <div className='container'>
        <InputBox chatlog={chatlog} setChatlog={setChatlog} useApi={getArt}/>
      </div>
    </div>
  )
}

export default ArtCat