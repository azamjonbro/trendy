import React from 'react'
import './style.scss';
import titlesock from '../../assets/title-sock.png'
import heroBottom from '../../assets/hero-bottom.png'
function index() {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-top">
            <h1 className='hero-top-title'>
                Zamonaviy Kiyimlar Trendy <span><img src={titlesock} alt="" /></span> bilan
            </h1>
        </div>
        <div className="hero-bottom">
            <img src={heroBottom} alt="image" className='hero-image' />
        </div>
      </div>
    </div>
  )
}

export default index
