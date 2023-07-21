import React from 'react'
import './CardPortadaMultiple.css';

const CardPortadaMultiple = () => {
    return (
        <>
            <div className='portada-playlist-multiple-container'>
                <div id='portadaPlaylistmultiple' className="portada-playlist-multiple-cover">
                    <div id='portadaMultipleCover1' className="portadaMultipleCover1">
                        <img src="src/public/bad-bunny-cover.png" alt="" />
                    </div>
                    <div id='portadaMultipleCover2' className="portadaMultipleCover2">
                        <img src="src\public\jhayco-cover.png" alt="" />
                    </div>
                    <div id='portadaMultipleCover3' className="portadaMultipleCover3">
                        <img src="src\public\duki-cover.png" alt="" />
                    </div>
                    <div id='portadaMultipleCover4' className="portadaMultipleCover4">
                        <img src="src\public\eladio-cover.png" alt="" />
                    </div>
                </div>
                <h4 id='nombrePlaylist'>Nombre de la playlist</h4>
                <h5 id='usuariosPlaylist'>nombres_de_usuario</h5>

            </div>
        </>)
}

export default CardPortadaMultiple
