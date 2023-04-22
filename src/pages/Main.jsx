import React from 'react'
import styles from './Main.module.css'
import meowssengerHeader from '../images/meowssenger.png'
import myCatPic from '../images/MyCat.png'
import ChatListItem from '../components/ChatListItem'

const Main = () => {
  const chatListDetails = [
    {'name': 'My Cat',
      'pfp': myCatPic,
      'navlink': 'dno yet'}
      // also add router link
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
            <ChatListItem key={`chatlist-item-${index}`} name={item.name} img={item.pfp} navlink={item.navlink} />
        )})}
        </div>
      </div> 
    </div>
  )
}

export default Main