import React, { useState } from 'react';
import sendOn from '../assets/sendOn.png';
import sendOff from '../assets/sendOff.png';
import '../Component-Styles/TextBox.css';
import { map } from '../functionalities';

function TextBox({ title , infoArray , setInfoArray }) {

  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');
  // const [noteData, setNoteData] = useState(null);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setIsTyping(newText.trim().length > 0);
  };

  const handleImageClick = () => {
    if (text.trim().length > 0) {
      const currentDate = new Date();
      
      const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  
      const timeOptions = { hour: '2-digit', minute: '2-digit' };
      const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
  
      const newNoteData = {
        date: formattedDate,
        time: formattedTime,
        text,
        title,
      };
  
      const updateNoteList = [...infoArray, newNoteData];
      setInfoArray(updateNoteList);
      localStorage.setItem('notes', JSON.stringify(updateNoteList)); 
      setText('');
    }
  };
  
  
  

  return (
    <div>
      <div className='textbox'>
        <div className='note-text'>
          <textarea
            placeholder='Enter your text here...........'
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <img
            src={isTyping ? sendOn : sendOff}
            alt='Send'
            onClick={handleImageClick}
          />
        </div>
      </div>
      
    </div>
  );
}

export default TextBox;
