import React, { useState } from 'react';
import Form from './components/Form.js';
import Userlist from './components/Userlist.js';


function App() {
  const [userslist ,setuserslist] = useState ([]);

  const adduserHandler = (uname , uage) => {
    setuserslist((prevuserlist) => {
      return [...prevuserlist,{name: uname ,age: uage, id:Math.random().toString()}];
    });
  };
  return (
    <div >
     <Form onAdduser={adduserHandler} />
     <Userlist users={userslist}/>
     
    </div>
  );
}

export default App;
