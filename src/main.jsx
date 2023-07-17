import React from 'react'
import ReactDOM from 'react-dom/client'
import i18next from 'i18next'
import { useTranslation , initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';
import HttpApi from 'i18next-http-backend'
import { BrowserRouter } from 'react-router-dom';
import App from './App'


i18next
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ru','uz'],
    fallbackLng: "ru",
    detection:{
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: 'public/assets/locales/{{lng}}//translation.json',
    },
    react:{
      useSuspense:false
    }

  
  });
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
