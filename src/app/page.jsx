"use client"
import React, { useState } from 'react'
import Header from './components/header'
import Sect1 from './components/sect1'
import Sect2 from './components/sect2'
import Sect3 from './components/sect3'
import Sect1_2 from './components/sect1-2'
import Sect4 from './components/sect4'
import Sect5 from './components/sect5'
import Sect6 from './components/sect6'
import Sect7 from './components/sect7'
import Footer from './components/footer'
import store from './components/store'
import Menu from './components/menu'
export default function page() {
const [isMenu,setIsMenu] = useState(false)
const [displayMenu,setDisplayMenu] = useState(['none','none','none'])
  const [iconMenu, setIconMenu] = useState(<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>)
  const clickMenu = () =>{
    setIsMenu(prev=>{
      return !prev
    })
    if (isMenu==false) {
      setIconMenu(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      )
    }else{
      setIconMenu(<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>)
    }
    
  }
  const clickLi = (i,e) =>{

    
    if (displayMenu[i] == 'none') {
      displayMenu[i] = 'flex'
      setDisplayMenu([...displayMenu])
    }else{
      displayMenu[i] = 'none'
      setDisplayMenu([...displayMenu])
    }
   
  }
  return (
    <div className='relative'>
      <store.Provider value={{clickMenu,isMenu,iconMenu,clickLi,displayMenu}}>
      <Header />
      <Menu />
      <Sect1 />
      <Sect1_2 />
      <Sect2 />
      <Sect3 /> 
      <Sect4 />
      <Sect5 />
      <Sect6 />
      <Sect7/>
      <Footer />
      </store.Provider>
    </div>
  )
}
