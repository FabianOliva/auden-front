import React from 'react';
import './HeaderB.css';

const HeaderB = (props) => {
    const { subtitulo, tituloPrincipal } = props;

    return (
        <>
            <div className='cabezal-container'>
                <div className="back-container">
                    <img src="src/public/left-arrow.svg" alt="" />
                </div>
                <div className="titulo-container">
                    <h5>{subtitulo}</h5>
                    <h3>{tituloPrincipal}</h3>
                </div>

                <div className='options-container'>
                    <img src="src/public/right-icon-placeholder.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default HeaderB;
