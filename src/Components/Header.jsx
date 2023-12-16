// Header.js
import React from 'react';
import Chat from '../Components/Chat.jsx';
import '../Component-Styles/Header.css';
import back from '../assets/back.png'
function Header({ bgColor, title,handleBackButton }) {

  const initials = title ? title.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase() : '';
  
  return (
    <div className='header'>
      <div className="chatTitleInfo">
        <img className= "back-button" src={back} onClick={handleBackButton}></img>
        <div className='chatTitleIcon' style={{ backgroundColor: bgColor }}>{initials}</div>
        <p>{title}</p>
      </div>
    </div>
  );
}


export default Header;
