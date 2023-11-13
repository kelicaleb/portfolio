import React from 'react'
import Skill from './skill.jpg'

function About()
{
    return(
    
        <div id="About" className=" w-screen   pt-80 bg-slate-950  font-bold font-serif  ">
                <div className=" relative flex items-center justify-center w-screen h-screen pb-[11rem] ">
                 <div className=" font-mono shadow-lg pt-8 shadow-slate-500/100 hover:shadow-slate-300/100 text-center text-white hover:text-slate-200  w-[70rem]  text-2xl pb-40 ">
                 <h1 className="text-green-500 text-7xl font-serif">About</h1>
                 <p className="text-center text-white hover:text-slate-200 pt-8 ">In a wolrd full of colors, I tend to see it as grey . Neither good nor bad. My bad!, I still love chess.  I grew up in a Castle without a king but ruled by queen with two siblings.</p>
                 <p className="text-center text-white hover:text-slate-200">  Am currently in Jomo Kenyatta University Information and Technology pursuing well you guessed it Information technology.My coding backagound Moringa School, selftaught and udemy.
                 </p></div>
            </div>
        </div>
    )
}

export default About 