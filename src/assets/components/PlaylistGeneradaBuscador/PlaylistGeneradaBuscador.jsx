import React from 'react'
import './PlaylistGeneradaBuscador.css';
import HeaderB from '../Subcomponentes/HeaderB/HeaderB';
import BackgroundA from '../Subcomponentes/BackgroundA/BackgroundA';
import BackgroundB from '../Subcomponentes/BackgroundB/BackgroundB';
import ControlesDeReproduccion from '../Subcomponentes/ControlesDeReproduccion/ControlesDeReproduccion';
import AppFooterControls from '../Subcomponentes/AppFooterControls/AppFooterControls';
import SearchConFiltros from '../Subcomponentes/SearchConFiltros/SearchConFiltros';
import SongRow from '../Subcomponentes/SongRow/SongRow';

export const PlaylistGeneradaBuscador = () => {
    return (
        <>
            <BackgroundB>
                <HeaderB subtitulo="Generada del Cupido Musical" tituloPrincipal="Playlist Generada" />

                <SearchConFiltros/>



                <ControlesDeReproduccion/>

                <div className="playlist-songs-container-PGB">

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
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>


                </div>
                <AppFooterControls/>
            </BackgroundB>
        </>
    )
}
