import React from 'react'
import styles from './Main.module.css'
import meowssengerHeader from '../images/meowssenger.png'
import myCatPic from '../images/MyCat.png'
import artCatPic from '../images/ArtCat.png'
import ChatListItem from '../components/ChatListItem'

const Main = () => {
  const chatListDetails = [
    // add router links later
    {'name': 'My Cat',
      'pfp': myCatPic,
      'api': 'TheCatAPI',
      'apiLink': 'https://thecatapi.com/',
      'navLink': 'dno yet'},

    {'name': 'Leonyado da Kitty',
      'pfp': artCatPic,
      'api': 'DALL-E 2',
      'apiLink': 'https://openai.com/product/dall-e-2',
      'navLink': 'dno yet'},
    

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