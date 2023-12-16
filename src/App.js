
import './App.css';
import logo from './assets/image-removebg-preview 1.png';
import CreateGroup from './Components/CreateGroup';
import NoteList from './Components/NoteList';
import { useState,useEffect } from 'react';
import lock from './assets/lock.png'
import ChatContent from './Components/ChatContent';
import Note from './Components/Note.jsx'
function App() {
  const [isCreateGroupVisible, setCreateGroupVisible] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [data, setData] = useState({});
  const [notesArray, setNotesArray] = useState([]);

  const updateData = () => {
    setData({ ...data, newKey: 'newValue' });
  };


  useEffect(() => {
    
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroupList(storedGroups);
  }, []);

  const handleBackButton = () =>{
    const notelist = document.querySelector('.notelist');
    const chatContent = document.querySelector('.chatContent');
    if (notelist) {
      notelist.style.display = 'block';
    }
    if(chatContent){
      chatContent.style.display = 'none';
    }
  }

  const handleChatClick = (event) => {
   
    const chatIcon = event.target.closest('.chat');
  
    if (chatIcon) {
      const bgColor = chatIcon.querySelector('.chat-icon').style.backgroundColor;
      const title = chatIcon.querySelector('p').innerText;
      console.log('Clicked chat:', { title });
  
      setSelectedChat({  bgColor, title });
      if (window.innerWidth <= 600) {
        const notelist = document.querySelector('.notelist');
        const chatContent = document.querySelector('.chatContent');
        if (notelist) {
          notelist.style.display = 'none';
        }
        if (chatContent) {
          chatContent.style.display = 'block';
          chatContent.style.width = '100vw';
          chatContent.style.height = '100vh';
        }
      }
      
    }
  };
  

  const showCreateGroup = () => {
    setCreateGroupVisible(true);
  };

  const hideCreateGroup = () => {
    setCreateGroupVisible(false);
  };

  const handleGroupCreate = (groupData) => {
    const updatedGroupList = [...groupList, groupData];
    setGroupList(updatedGroupList);
    localStorage.setItem('groups', JSON.stringify(updatedGroupList));
  };

  return (
    <div className="App">
      <NoteList onAddButtonClick={showCreateGroup} groupList={groupList} onClick={handleChatClick} />

      {!selectedChat && (
        <div className="default-content">
          <div className="content">
          <img src={logo} alt={''}></img>
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          </div>

          <div className='end-to-end'><img src={lock} alt=''></img>
          <p>end-to-end encrypted</p>
          
          </div>
         
          
        </div>
      )}
      
      {isCreateGroupVisible && <CreateGroup onClose={hideCreateGroup} onGroupCreate={handleGroupCreate} />}
      
      {selectedChat && (
        <ChatContent bgColor={selectedChat.bgColor} title={selectedChat.title} back={handleBackButton}/>      
      )}
      
    </div>
  );
}

export default App;
