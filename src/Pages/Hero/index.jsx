import React from 'react'
import './style.scss';
import krasovka from '../../assets/krasofka.png'
import heroBottom from '../../assets/hero-bottom.png'
import { useTranslation } from "react-i18next";

function index() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-top">
            <h1 className='hero-top-title'>
                {t('hero-title')}
            </h1>
        </div>
       <div className="hero-bottom">
        <a className='qanaqadir'>{t('contact')}</a>
        <img src={krasovka} alt="" />
       </div>
      </div>
    </div>
  )
}

export default index
