import React from 'react'
import {Link} from 'react-router-dom';
import Image2 from '../assets/image2.png';
import'../styles/Home.css';

 function Home() {
  return (
    <div className='home'>
      <div className='logo'>
        <img src={Image2}/>
      </div>
      <div className='headerContainer' >
        <h1>Ashley's Indiana </h1>
        <p>A MASTERCHEF QUALITY FOOD</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home