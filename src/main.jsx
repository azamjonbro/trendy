import React from 'react'
import ReactDOM from 'react-dom/client'
import i18next from 'i18next'
import { useTranslation , initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';
import HttpApi from 'i18next-http-backend'
import { BrowserRouter } from 'react-router-dom';
import ru from '../public/assets/locales/ru.json'
import uz from '../public/assets/locales/uz.json'
import en from '../public/assets/locales/en.json'

import App from './App'


i18next
  .use(initReactI18next) .init({
    supportedLngs:['en','ru','uz'],
    resources:{
      en:{
        translation:en
      },
      uz:{
        translation:uz
      },
      ru:{
        translation:ru
      }

    },
    lng:localStorage.getItem("i18lang")||'uz'

  
  });
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
