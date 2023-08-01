/*El Background A es el que no tiene degrade cremita en el footer*/

import React from 'react';
import './BackgroundA.css';

const BackgroundA = (props) => {
  return (
    <>
      <section className='app-container-backgroundA'>
        {props.children}
      </section>
    </>
  );
};

export default BackgroundA;
