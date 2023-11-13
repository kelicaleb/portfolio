import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './mystyle.css'
import { Fade, Slide, Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Deer from './Deer.jpg'
import Comp from './Comp.jpg'
import Old from './Old.jpg'
import Adventure from './Adventure.jpg'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: `${Comp}`,
      caption: 'SeeMore?!',
      title:"Independent Project",
      link:"https://kelicaleb.github.io/independent-project/"
    },
    {
      url: `${Old}`,
      caption: 'SeeMore?!',
      title:"Old portfolio",
      link:"https://kelicaleb.github.io/caleb/"

    },
    {
      url: `${Adventure}`,
      caption: 'Adventure',
      title:"Can be anything",
      link:"https://kelicaleb.github.io/kelicaleb/"

    },
  ];
  const Profile = () => {
    return (
     <div  id="Profile"className="bg-slate-950  h-screen w-screen">
      
         <div>
         <Slide>
         {slideImages.map((slideImage, index)=> (
            <>
            <div>
            <h1 className="text-cyan-600 text-6xl font-serif text-center">
                {slideImage.title}
             </h1>
             </div>
             <div className="relative flex items-center justify-center h-screen shadow-md pl-8 pr-8 " key={index}>
                     <div className=" h-[40rem]  pt-60  w-[40rem]  bg-no-repeat relative flex  pb-60 items-center justify-center   shadow-lg shadow-purple-400/100" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                         <a className="text-blue-600 font-mono text-7xl hover:text-cyan-400 " href={slideImage.link}>{slideImage.caption}</a>
                     </div>
                 </div></>
          ))} 
            </Slide>
      </div>
     </div>
    )
}

export default Profile 