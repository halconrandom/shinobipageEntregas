import React from 'react';
import './infoLateral.css';

const infoLateral = ({children}) => {

  return (
    <div className='containerLateral'>
      
      {children}


      <h2>Hola como estas</h2>
    </div>
  );
};

export default infoLateral;
