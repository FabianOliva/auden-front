/*El Background C es para el user-profile*/

import React from 'react';
import './BackgroundC.css';

const BackgroundC = (props) => {
  return (
    <>
      <section className='app-backgroundC'>
        {props.children}
      </section>
    </>
  );
};

export default BackgroundC;
