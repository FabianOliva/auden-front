import React, { useState } from 'react';
import "./CrearPlaylist.css";
import BackgroundB from '../../components/BackgroundB/BackgroundB';
import HeaderA from '../../components/HeaderA/HeaderA';
import BotonesDaniNaranja from '../../components/BotonesDani/BotonesDaniNaranja';
import BotonesDaniGris from '../../components/BotonesDani/BotonesDaniGris';

const CrearPlaylist = () => {
    const [playlistName, setPlaylistName] = useState("");

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setPlaylistName(inputValue);
        console.log("Input value:", inputValue);
    };

    return (
        <>
            <BackgroundB>
                <HeaderA tituloPrincipal="Crear Playlist" redirectUrl="/home" />
                <div className='crear-playlist-container'>
                    <span className='cpc-tituloA'><h3>Como se llamará tu playlist?</h3></span>
                    <span className='cpc-subtituloB'><h5>Nombre de la playlist:</h5></span>
                    <div className='cpc-input-playlist'>
                        <input id='userCreatePlaylist' type="text" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="cpc-crearplaylist-footer">
                    <BotonesDaniGris opcion="Continuar" redirectUrl="/gestionar-playlist" />
                </div>
            </BackgroundB>
        </>
    )
}

export default CrearPlaylist;
