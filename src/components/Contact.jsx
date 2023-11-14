import React, { useRef, useState, useEffect  } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheck } from "react-icons/fa";




const Contact = () => {
  const form = useRef();
  const [alert, setAlert ] =  useState(false)
  const [input , setInput] = useState('')
  const [ email, setEmail]  = useState('')
  const [ message, setMessage ] = useState('')
  const inputRef = useRef()
  
 const handleInput = (value )=> 
 {
    setInput(value)
    if(value == '')
    {
        setAlert(false)
    }
 }
 const handleMessage = (value )=> 
 {
    setMessage(value)
    if(value == '')
    {
        setAlert(false)
    }
 }
 const handleEmail = (value )=> 
 {
    setEmail(value)
    if(value == '')
    {
        setAlert(false)
    }
 }

  const sendEmail = (e) => {
    e.preventDefault();
    setAlert(true)
    console.log(inputRef.current.value )

    emailjs.sendForm('service_iw9ti5s', 'template_q9459wh', form.current, 'dqKZERn-gcneay-Sp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="Contact" className="bg-slate-950 h-screen ">
        <h1 className="text-7xl font-mono text-blue-500 text-center">CONTACT</h1>
    <form ref={form} onSubmit={sendEmail}>
      <div className="relative flex items-center justify-center pt-7 text-white">
        <label className="text-white pr-4 text-2xl">Name:</label>
        <input  required className="bg-slate-900 font-italic  hover:bg-sky-400  text-white h-16 w-[14rem] pl-3 rounded-full"
         type="text" name="user_name" placeholder="Enter your name..."  value={input} onChange={e => handleInput(e.target.value)}/>
      </div>
      <div className="relative flex items-center justify-center pt-7">
      <label className="text-white text-2xl pr-4">Email:</label>
      <input required className="bg-slate-900 pl-3 font-serif rounded-full text-white hover:bg-sky-500 w-[14rem] h-16"
       type="email" name="user_email" placeholder="Enter your email..." value={email} onChange={e => handleEmail(e.target.value)}/>
      </div>
      <div className="relative flex items-center justify-center pt-7 ">
      <label className="text-white text-2xl pr-4">Message:</label>
      <textarea required className="bg-slate-900 text-white rounded-full h-20 pt-7 w-[14rem] pl-3 hover:bg-sky-500" name="message" 
       placeholder="Enter your message..." value={message} onChange = { e => handleMessage(e.target.value)} />
      </div>
      <div className="pt-8 pl-8 relative flex items-center justify-center">
      <button className="bg-blue-500 text-3xl font-serif text-white w-[12rem]  h-[5rem] rounded-full hover:rounded-[12px] hover:bg-indigo-500" type="submit" 
          value="Send">Submit</button>
      </div>
      <div className="relative flex items-center justify-center pt-7">
     { 
        alert && <><p className="text-green-500 pl-12"> Message was sent successfully to kelicaleb7@gmail.com<FaCheck className="w-[30rem] pt-3 h-[2rem]" /></p></>
      }
     </div>
    </form>
    </div>
  );
};
export default Contact 