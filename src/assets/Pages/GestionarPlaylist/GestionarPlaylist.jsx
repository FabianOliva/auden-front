import React from 'react'
import { Link } from 'react-router-dom';
import BackgroundB from '../../components/BackgroundB/BackgroundB';
import HeaderB from '../../components/HeaderB/HeaderB';
import './GestionarPlaylist.css'
import Nav_Bar from '../../components/Nav_bar';
import BotonesDaniNaranja from '../../components/BotonesDani/BotonesDaniNaranja';


const GestionarPlaylist = () => {
    return (
        <>
            <BackgroundB>
                <HeaderB tituloPrincipal="nombre de la playlist &#x1F60E;" redirectUrl="/crear-playlist" />
                <div className="infogestionarPlaylist-container fade-in-right">
                    <span>Creada por:</span>
                    <span><img src="src\public\playlistuseruser.svg" alt="" /></span>
                </div>

                <div className="userProfilePlaylist-Container fade-in-left">
                    <div className='userProfilePlaylist-Container-secA'>
                        <div className="Duser-picture">
                            <img src="src/public/user-default.png" alt="" />
                        </div>
                    </div>

                    <div className='userProfilePlaylist-Container-secB'>
                        <h4>nombre_usuario</h4>
                    </div>
                </div>
                <img src="src\public\divider-large.png" />

                <div className="btn-userProfilePlaylist-container">
                    <span className='fade-in-right'>¿Qué esperás?</span>
                    <span className='fade-in-left'>¡Hagamos crecer tu playlist!</span>

                    <div className='fade-in-right'>

                        <Link to="/añadir-canciones">
                            <BotonesDaniNaranja opcion="Añadir Canciones" />
                        </Link>
                    </div>
                </div>
                <Nav_Bar />



            </BackgroundB>
        </>
    )
}

export default GestionarPlaylist
