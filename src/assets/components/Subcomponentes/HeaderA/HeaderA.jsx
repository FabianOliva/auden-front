import React from 'react';
import '../HeaderA/HeaderA.css';

const HeaderA = (props) => {
    const {tituloPrincipal } = props;

    return (
        <>
            <div className='cabezal-container'>
                <div className="back-container">
                    <img src="src/public/left-arrow.svg" alt="" />
                </div>
                <div className="titulo-container">
                    <h3>{tituloPrincipal}</h3>
                </div>
            </div>
        </>
    );
};

export default HeaderA;
