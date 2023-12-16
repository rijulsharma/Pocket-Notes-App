import React, { useState } from 'react'
import '../Component-Styles/Note.css'
function Note({text,time,date}) {
  

  return (
    <div className='note'>
      <p>{text}</p>
      <br></br>
      <br></br>
      <div className='date-time'><p>{date}</p><span className="dot"></span><p>{time}</p></div>
      
    </div>
  )
}

export default Note
