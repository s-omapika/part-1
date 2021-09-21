import React from 'react';
import './Form.css';
const Errormodal = props => {

 return (
     <div>
         <div className="backdrop" onClick={props.onConfirm}>
     <div className="modal">
         <header>

             <h2 className="tt"> {props.title} </h2>
         </header>

           <div>
               <p className="mm"> {props.message}</p>
           </div>

           <footer>
              <button className='bb' onClick={props.onConfirm}> Okay</button>
           </footer>


     </div>
     </div>
     </div>
    

 )

};

export default Errormodal;