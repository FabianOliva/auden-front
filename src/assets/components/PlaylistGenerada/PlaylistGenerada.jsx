import React from 'react';
import './PlaylistGenerada.css';
import HeaderB from '../Subcomponentes/HeaderB/HeaderB';
import BackgroundA from '../Subcomponentes/BackgroundA/BackgroundA';
import BackgroundB from '../Subcomponentes/BackgroundB/BackgroundB';
import AppFooterControls from '../Subcomponentes/AppFooterControls/AppFooterControls';
import ControlesDeReproduccion from '../Subcomponentes/ControlesDeReproduccion/ControlesDeReproduccion';
import SongRow from '../Subcomponentes/SongRow/SongRow';

export const PlaylistGenerada = () => {
    return (
        <>
            <BackgroundB>
                <HeaderB subtitulo="Generada del Cupido Musical" tituloPrincipal="Playlist Generada" />

                <div className="cover-container">
                    <div id='img-cover1' className="cover-1"></div>
                    <div id='img-cover2' className="cover-2"></div>
                    <div id='img-cover3' className="cover-3"></div>
                    <div id='img-cover4' className="cover-4"></div>
                </div>

                <div className='shared-time-container'>
                    <div className='mini-icons-container'>
                        <img src="src/public/logo-small.svg" alt="" />

                    </div>
                    <div className='mini-icons-container'>
                        <img src="src/public/verified.svg" alt="" />

                    </div>
                    <div className='mini-icons-container'>
                        <img src="src/public/share.svg" alt="" />
                    </div>

                    <div className="playlist-time">
                        1h 17m
                    </div>

                    <div className="playlist-time-ico">
                        <img src="src/public/time.svg" alt="" />
                    </div>
                </div>
                <ControlesDeReproduccion/>

                <div className="playlist-songs-container">


                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>

                </div>


                <AppFooterControls />
            </BackgroundB>

        </>
    );
};

