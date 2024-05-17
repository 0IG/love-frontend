import React from 'react'
import './Home.scss'
export default function Home() {
  return (
    <div className='home'>
        <h1 className='home__title'>Letters to you</h1>
        <h3 className='home__description'>A place to store your love letters and photos and plan future dates!</h3>
        <img className="home__imgLetter" src='https://static.vecteezy.com/system/resources/previews/010/987/524/original/love-letter-message-3d-illustration-shape-free-png.png' alt='love-letter-img'></img>
    </div>
  )
}
