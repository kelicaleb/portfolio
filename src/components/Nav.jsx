import React, {useState  } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { SlMenu } from "react-icons/sl";
import {  BiX}  from "react-icons/bi";
import Home from './Home'
import App from '../App'
import { ImUser, ImPhone, ImShocked } from "react-icons/im";
import Contact from './Contact'
import Profile from './Profile'
import About from './About'



function Nav(){
  const [ show, setShow ] = useState(false)
  const handleShow = () => 
  {
    setShow(!show)
  }
  let Component 
  switch(window.location.pathname){
   case"/Home":
   Component = <Home/>
   break
   case"/Profile":
   Component = <Profile/>
   break
   case"/About":
   Component = <About/>
   break
  }
  return(
  <>
 
  <nav className="h-screen fixed top-0 left-0 right-0 ">
         <div className="grid  gap-y-4 grid-cols-3 w-96">
    {
      show ?  
      <div className="relative">
      <div className="fixed top-0 left-0 right-0 ">
      <div className="control w-40">
            <ul>
              <li className="pt-4"> <div className="firsticon group pt-2  ">
                 <a  href="#Home"><FiHome className="h-8 w-8 " /></a>
                 <div className="pl-4">
                 <p className="paragraph group-hover:scale-100 ">Home</p>
                 </div>
               </div>
               </li>
               <li className="pt-12"> 
                <div className="firsticon group pt-2  ">
                 <a  href="#Profile"><ImUser className="h-8 w-12 " /></a>
                 <div className="pl-4">
                 <p className="paragraph group-hover:scale-100 ">Profile</p>
                 </div>           </div>
               </li>
               <li className="pt-80"> 
                <div className="firsticon group pt-2  ">
                 <a  href="#About"><ImShocked className="h-8 w-12 " /></a>
                 <div className="pl-4">
                 <p className="paragraph group-hover:scale-100 ">About</p>
                 </div>           </div>
               </li>
               <li className="pt-12"> 
                <div className="firsticon group pt-2 pl-16  ">
                 <a  href="#Contact"><ImPhone className="h-8 w-14 pl-4 " /></a>
                 <div className="pl-4">
                 <p className="paragraph group-hover:scale-100 ">Contact</p>
                 </div>           
                 </div>
               </li>
            </ul>
          </div>
      </div>
    </div>:
  <div className="relative w-40 right-0  bg-slate-950 ">
  <div className="fixed top-0 left-2 right-100">
  <div className="pl-4 pt-4 text-white relative flex item-center justify-center">
      <button className=" text-blue-500 group hover:bg-blue-600 hover:rounded-full h-12 w-12 hover:text-white pt-3"onClick={handleShow}>
      <SlMenu className="h-6 w-12 "/>
      <div className="pl-12">
              <p className="paragraph group-hover:scale-100 ">Menu</p>
          </div>
    </button>
    </div>
  </div>
  </div>
    }
    <div className=" left-4">
        {
            show &&  <div className=" pl-4 pt-2 relative flex item-left justify-left ">
            <button  className="fixed top-10 left-40 right-0 text-rose-500 group hover:bg-rose-500 hover:rounded-full w-12 h-12  hover:text-white pt-3  pl-3 "onClick={handleShow}>
              <BiX className="h-6 w-6  "/>
              <div className="pl-12">
              <p className="paragraph group-hover:scale-100 ">Exit</p>
              </div>
            </button>
            </div>
        }
     
       </div>
  </div>
  </nav> 
  { Component}
    </>
  
  )
}
export default Nav 