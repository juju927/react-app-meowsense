import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Chat from '../components/Chat'
import BackButton from '../components/BackButton';
import styles from './Chatscreen.module.css'
import pfp from '../images/FeelingCat.png'


const FeelingCat = () => {
  const [giphyCat, setGiphyCat] = useState()
  const [chatlog, setChatlog] = useState([
    {'sender': 'cat',
    'type': 'text',
    'content': 'How was your day? .₊̣̇.ಇ/ᐠˬ ͜   ˬ ᐟ\\∫.₊̣̇.'},
   ])

  const details = {
    'name': "Mom Cat",
    'img': pfp,
    'desc': 'loves and feels for u 💕'
  }

  const getGiphyCat = async(type) => {
    const offset = Math.floor(Math.random()*5)
    const res = await fetch('https://api.giphy.com/v1/gifs/search?' + 'api_key=' + import.meta.env.VITE_GIPHY_API_KEY + '&q=' + type + '+cat' + '&limit=1' + '&offset=' + offset + '&rating=g&lang=en')
    const data = await res.json();

    if (res.status === 200) {
      data.data.map((item, idx)=> {
        setGiphyCat(item.images.original.url)
      })
    } else {
      const link = 'https://http.cat/' + res.status + '.jpg';
      setGiphyCat(link)
    }
  }

  useEffect(()=> {
    if (giphyCat) {
      // when catPic is updated (getCat() has run), update chatlog
      setChatlog(currentLog => {
        const updatedLog = [...currentLog, {'sender': 'cat', 'type': 'img', 'content': giphyCat}];
        return updatedLog 
      })
    }
  }, [giphyCat])

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
        <InputBox chatlog={chatlog} setChatlog={setChatlog} useApi={getGiphyCat}/>
      </div>
    </div>
  )
}

export default FeelingCat