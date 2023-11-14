import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link}  from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Profile from './components/Profile'
import About from './components/About'
import Contact from './components/Contact'
import React from 'react'
import Typewriter from "typewriter-effect";
import Gone from './Gone'



function App() {
 let Component 
 switch(window.location.pathname){
  case"#Home":
  Component = <Home/>
  break
  case"/Profile":
  Component = <Profile/>
  break
  case"/Contact":
  Component = <Contact/>
  break
 }
 const handleClick = (e) => 
 {
  console.log("its working")
 }
  return (
    <><div>
      <Home />
      <Profile id="Profile" />
      <About id="About" />
      <Contact id="Contact" />
      <div className="text-green-400">
      </div>
      {Component}
      <div>
      </div>
    </div>
    <Nav /></>

  )
}

export default App
