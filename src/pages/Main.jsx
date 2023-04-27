import React from 'react'
import ChatListItem from '../components/ChatListItem'
import styles from './Main.module.css'
import meowssengerHeader from '../images/meowssenger.png'
import myCatPic from '../images/MyCat.png'
import artCatPic from '../images/ArtCat.png'
import adviceCatPic from '../images/AdviceCat.png'
import feelingCatPic from '../images/FeelingCat.png'
import jokeCatPic from '../images/DadCat.png'

const Main = () => {
  const chatListDetails = [
    {'name': 'My Cat',
      'pfp': myCatPic,
      'api': 'TheCatAPI',
      'apiLink': 'https://thecatapi.com/',
      'navLink': '/my-cat'},

    {'name': 'Leonyado da Kitty',
      'pfp': artCatPic,
      'api': 'DALL-E 2',
      'apiLink': 'https://openai.com/product/dall-e-2',
      'navLink': '/art-cat'},

    {'name': 'Catfucius',
      'pfp': adviceCatPic,
      'api': 'Advice Slip JSON API',
      'apiLink': 'https://api.adviceslip.com/',
      'navLink': '/advice-cat'}, 

    {'name': 'Mom Cat',
    'pfp': feelingCatPic,
    'api': 'GIPHY',
    'apiLink': 'https://giphy.com/',
    'navLink': '/feeling-cat'}, 

    {'name': 'Dad Cat',
    'pfp': jokeCatPic,
    'api': 'icanhazdadjoke',
    'apiLink': 'https://icanhazdadjoke.com/api',
    'navLink': '/joke-cat'}, 
    ]

   
  return (
    <div className={ styles['fullscreen'] }>
      <div className='container'>
        <div className={`container ${styles['header']}`}>
          <img className={ styles['headerimg'] } src={meowssengerHeader} />
        </div>
      </div>

      <div className='container'>
        <div className={`container ${styles['chatlistarea']}`}>
        {chatListDetails.map((item, index)=> {
          return(
            <ChatListItem key={`chatlist-item-${index}`} name={item.name} api={item.api} apiLink={item.apiLink} img={item.pfp} navLink={item.navLink} />
        )})}
        </div>
      </div> 
    </div>
  )
}

export default Main