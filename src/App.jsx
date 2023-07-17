import React from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route,  } from 'react-router-dom'
import Router  from './Router.jsx'

function App() {
    const {t}=useTranslation()
  return (
    <>
      <Router />
    </>
  )
}

export default App
