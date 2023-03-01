import React from 'react'


export default function Header() {
  return (
    <>
    <div className='header-back'>
      <div className='title-set'>
      <h1> The little lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, 
      focused on traditional recipes served with a modern twist.</p>
      <button className='primary-button'>Reserverve table</button>
      </div>
      <div className='home-image-section'>
        <img src='restauranfood.jpg' alt='restuarent' height="400px" width="300px" border-radius="16px"></img>
      </div>
    </div>
    </>
  )
}
