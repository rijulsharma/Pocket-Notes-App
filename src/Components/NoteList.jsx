// NoteList.js
import React from 'react';
import '../Component-Styles/NoteList.css';
import Chat from './Chat';

function NoteList({ onAddButtonClick, groupList, onClick }) {
  return (
    <div className='notelist'>
      <h1>Pocket Notes</h1>
   
      <button className='add-button' onClick={onAddButtonClick}>+</button>

      {groupList.map((group) => {
        return (
          <Chat  
            Initials={''}
            bgColor={group.selectedColor}
            title={group.groupName}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
