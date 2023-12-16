import React, { useState, useEffect } from 'react';
import Header from './Header';
import TextBox from './TextBox';
import Note from './Note';
import '../Component-Styles/ChatContent.css';
import { map } from '../functionalities';

function ChatContent({ bgColor, title , back }) {
  // const [notes, setNotes] = useState(() => {});
  const notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes);
  
  const [notesArray,setNotesArray] = useState([]);

  useEffect(() => {

    const storedGroups = JSON.parse(localStorage.getItem('notes')) || [];
    setNotesArray(storedGroups);
    
  }, [] );

  return (
    <div className='chatContent'>
      <Header bgColor={bgColor} title={title} handleBackButton={back}/>
      <div className='noteContent'>

        {notesArray.map((note) => {

          if ( title === note.title ){
            return (
              <Note
                text={note.text}
                time={note.time}
                date={note.date}
              />
            );
          }
        })}
      </div>
         {/* const [notesArray,setNotesArray] = useState([]); */}
      <TextBox title={title}  infoArray={notesArray} setInfoArray={setNotesArray} />
    </div>
  );
}

export default ChatContent;
