import React from 'react';
import '../ControlesDeReproduccion/ControlesDeReproduccion.css';

const ControlesDeReproduccion = () => {
    return (
        <>
            <div className="controles-reproduccion-container">
                <div className="copy-ico-container">
                    <img src="src/public/icon-left-placeholder.svg" alt="" />
                    <span>Crear Copia</span>
                </div>

                <div className="music-controls">
                    <div className="repeat-box">
                        <img src="src/public/shuffle.svg" alt="" />
                    </div>

                    <div className="play-box">
                        <img src="src/public/play-btn.svg" alt="" />

                    </div>

                </div>
            </div>
        </>
    )
}


export default ControlesDeReproduccion;