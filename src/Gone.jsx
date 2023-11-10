import React from 'react'


function Gone ()
{
  const handleClick = () => 
  {

    console.log("it works now ")
  }
  return(
    <>
    <div>
      <button className="bg-blue-500" onClick={handleClick}>handleClick</button>
    </div>
    </>
  )
}
export default Gone