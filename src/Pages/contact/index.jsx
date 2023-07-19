import React, { useState } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import './style.scss';







function index() {
  const {t} = useTranslation()
  const [name, setName]= useState('')
  const [tel, setTel]= useState('')
  console.log(name);
  return (
    <div className='contact'>
        <div className="contact-cont container">
            <div className="contact-left">
                <div className="contact-left-top">
                    <h3>
                      {t('contact-title')}
                    </h3>
                </div>
                <form className="contact-left-bottom" >
                  <input type="text" placeholder='Ism' value={name} onChange={((e)=>{setName(e.target.value)})} required className="name" id="name" />
                  <input type="phone" placeholder='Phone' value={tel} onChange={((e)=>{setTel(e.target.value)})} required className="phone" id="phone" />
                  <button className="form-submit" id="submit">{t('send')}</button>
                </form>
            </div>
            <div className="contact-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.1922191100513!2d72.1596620161934!3d40.73340771102308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc9126f57ef613%3A0xf67b6f6af65a1409!2sShahrixon%20yengil%20sanoat%20kasb%20xunar%20kolleji!5e0!3m2!1sru!2s!4v1689742231927!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default index
