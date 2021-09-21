import React from 'react';
import './Form.css';

const Userlist = props => {

    return (
        <div className='usli'>
      <ul>
     {props.users.map((user) => (
     <li key={user.id}>
         {user.name} ({user.age} years old)
     </li>
          
      ))}


      </ul>

         </div>
    );
};

export default Userlist;