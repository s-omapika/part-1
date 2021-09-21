  import React, {useState} from 'react';
  import './Form.css';
   import Errormodal  from './Errormodal';
  
  
  const Form = (props)  =>
   {
        const [enteredusername ,setEnteredusername] =useState('');
        const [enteredage ,setEnteredage] =useState('');
        const [error,seterror]= useState();

        const addHandler = (event) => {
          event.preventDefault();
          if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
            seterror ({
              title: 'Invalid input',
              message : 'Please enter a valid name and age'

            });
            return;
          }
          if (+enteredage < 1) {
            seterror ({
              title: 'Invalid age',
              message : 'Please enter a valid age (age>0).'

            });
            return;
          }
           props.onAdduser(enteredusername, enteredage);
           setEnteredusername('');
           setEnteredage('');
      };
       const usernamechangeHandler = (event) => {
           setEnteredusername(event.target.value);
       };

       const agechangeHandler = (event) => {
        setEnteredage(event.target.value);
    };

    const errorHandler = () => {
       seterror(null);
    };

       return ( 
           <>
          {error && <Errormodal title={error.title} message={error.message} onConfirm={errorHandler} />}
          <form onSubmit={addHandler}>
          
          <div className='Main'>
        
            <label htmlFor="username">UserName</label>
            <input  id ='username' type='text' value={enteredusername} onChange={usernamechangeHandler}/>
        

            <label htmlFor="username">Age(Years)</label>
            <input  id ='username' type='number' value={enteredage} onChange={agechangeHandler} />
        
         <button type="submit">Add User</button>
         </div>
        
         </form>
         
        </>
       );
  };

  export default Form;