import React from 'react'
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
                <div className="infogestionarPlaylist-container">
                    <span>Creada por:</span>
                    <span><img src="src\public\playlistuseruser.svg" alt="" /></span>
                </div>

                <div className="userProfilePlaylist-Container">
                    <div className='userProfilePlaylist-Container-secA'>
                        <div className="Duser-picture">
                            <img src="src/public/user-default.png" alt="" />
                        </div>
                    </div>

                    <div className='userProfilePlaylist-Container-secB'>
                        <h4>nombre_usuario</h4>
                    </div>
                </div>
                    <img src="src\public\divider-large.png"/>    

                    <div className="btn-userProfilePlaylist-container">
                        <span>¿Qué esperás?</span>                       
                        <span>¡Hagamos crecer tu playlist!</span>
                        <BotonesDaniNaranja opcion="Añadir Canciones"/>                       
                        </div>




                        <Nav_Bar/>



            </BackgroundB>
        </>
    )
}

export default GestionarPlaylist
