import React, { useEffect } from 'react'
import Caleb from './Caleb.jpeg'
import Typewriter from "typewriter-effect";


function Home(){

 
  const handleClick = () => 
  {
    console.log("it works here")
  }

     return(
      <>
        <div className="bg-slate-950 relative flex items-center justify-center " id="Home">
        <img src={Caleb} className="rounded-full h-60 w-60 pt-7"/>
        </div>
        <div className="bg-slate-950 " >
          <div className="text-7xl text-center text-green-500 font-sans">
          <Typewriter className="font-mono text-green-400"
            onInit={(typewriter) => {
              typewriter
                .typeString("Caleb Kavindu Keli")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcomes You")
                .start();
               }}
             />  
          </div>
         <div className="text-center text-white pt-7 text-2xl font-mono">
         <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("'Hello friend' this is my digital space!")
                .start()
               }}
             /> 
           <p className="text-white "> I'm passionate about [programming ], and I love bringing ideas to life through webdevlopment . </p>
            <p className="text-white">Explore my portfolio to witness the intersection of creativity and innovation.</p>
           </div>
         
        </div>
        <div className =" pb-60 relative flex items-center justify-center bg-slate-950 h-screen">
            <a href="#Profile"><button className="  h-40 w-80 text-black text-7xl font-serif rounded-none font-bold bg-green-500 hover:bg-violet-500  hover:text-blue-800 hover:font-bold hover:rounded-lg">Profile</button></a>
        </div>
      </>
    )
     }
     

export default Home