import React from 'react'
import './CardPortadaSimple.css';

const CardPortadaSimple = () => {
    return (
        <>
            <div className='portada-playlist-simple-container'>
                <div id='portadaPlaylistSimple' className="portada-playlist-simple-cover">
                    <img src="src/public/mike-cover.png" alt="" />
                </div>
                <h4 id='nombrePlaylist'>Nombre de la playlist</h4>
                <h5 id='usuariosPlaylist'>nombres_de_usuario</h5>

            </div>
        </>)
}

export default CardPortadaSimple
