// CreateGroup.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../Component-Styles/CreateGroup.css';
import { map } from '../functionalities';

function CreateGroup({ onClose, onGroupCreate }) {

  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleCreate = () => {
    if (groupName && selectedColor) {
      
      var existingGroup = 0;
      const groupArray = JSON.parse(localStorage.getItem('groups')) || [];

      {groupArray.map((groiupEle) => {
        if ( groupName === groiupEle.groupName ){
          existingGroup = 1;
        }
      })}
  
      if (existingGroup) {
        console.error('Group with the same name already exists. Choose a different name.');
      } else {
        const groupData = {
          groupName,
          selectedColor,
        };
  
        onGroupCreate(groupData);
      }
    }
    onClose();
  };
  
  

  const colorOptions = [
    { id: 'colourLilac', value: '#B38BFA' },
    { id: 'colorPink', value: '#FF79F2' },
    { id: 'colorCyan', value: '#43E6FC' },
    { id: 'colourOrange', value: '#F19576' },
    { id: 'colourDBlue', value: '#0047FF' },
    { id: 'colourLBlue', value: '#6691FF' },
  ];

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2F2F2F",
    opacity: 0.75,
    zindex:3,
  }

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}  />
      <div className='createGroup'>
        <div className='groupTitle'>Create New group</div>
       
        <div className="groupClass">
          <label htmlFor="groupName">Group Name</label>
          <input
            className='group-input'
            type="text"
            id="groupName"
            name="groupName"
            value={groupName}
            placeholder='Enter group name'
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        

        <div className="color-picker">
          <label>Choose Colour</label>
          <div className='circles'>
            {colorOptions.map((color) => (
              <div
                key={color.id}
                className='circle'
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorChange(color.value)}
              ></div>
            ))}
          </div>
        </div>
        

        <button className="createButton" onClick={handleCreate}>Create</button>
      </div>
    </>,
    document.getElementById('modal')
  );
}

export default CreateGroup;
