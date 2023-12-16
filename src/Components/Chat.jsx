// Chat.js
import React from 'react';
import '../Component-Styles/Chat.css';

function Chat({ bgColor, title, onClick }) {
  const initials = title ? title.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase() : '';

  const handleClick = (event) => {
    onClick( event); 
    
  };

  return (
    <div className='chat' onClick={handleClick}>
      <div className="itemBox">
        <div className='chat-icon' style={{ backgroundColor: bgColor }}>{initials}</div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Chat;
