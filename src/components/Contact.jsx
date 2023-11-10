import React from 'react'
import Nav from './Nav'


const handleClick = () => 
{
    console.log("its working")
}
function Contact()
{
   
    return(
       <>
        <div id="Contact" className=" text-white bg-slate-950">
            <button className="bg-green-400" onClick={handleClick}>Click me</button>
        </div>
       </>
    )
}
export default Contact 