/*El Background B es el que TIENE degrade cremita en el footer*/

import React from 'react';
import './BackgroundB.css';

const BackgroundB = (props) => {
  return (
    <>
      <section className='app-container-backgroundB'>
        {props.children}
      </section>
    </>
  );
};

export default BackgroundB;
