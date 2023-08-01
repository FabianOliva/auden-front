import React, { useState } from 'react';
import './AñadirCancionesAPlaylist.css';
import BackgroundA from '../../components/BackgroundA/BackgroundA';
import HeaderB from '../../components/HeaderB/HeaderB';
import SongRowAñadir from '../../components/SongRowAñadir/SongRowAñadir';

const AñadirCancionesAPlaylist = () => {
    const [selectedTag, setSelectedTag] = useState(null);

    const handleTagClick = (tagId) => {
        if (selectedTag === tagId) {
            setSelectedTag(null); // Deselect the tag if it's already selected
        } else {
            setSelectedTag(tagId); // Select the clicked tag
        }
    };

    const handleTagSelection = (tagId) => {
        console.log(`Usted ha elegido: ${tagId}`);
        // Puedes guardar el tag seleccionado en una variable o usarlo directamente según tus necesidades.
    };

    return (
        <>
            <BackgroundA>
                <HeaderB tituloPrincipal="Nombre de la playlist" />
                <div className='añadirCanciones-buscador-container'>
                    <div className="ab-buscador-container">
                        <img className='lupa' src="src/public/vector.svg" alt="" />
                        <input type="text" placeholder='Buscar' />
                        <img src="src/public/micro.svg" alt="" />
                    </div>
                    <div className="ab-tags-container">
                        <div className='tags-desplegables-box'>
                            <a
                                id='sugerencias'
                                className={`tag-black-ab ${selectedTag === 'sugerencias' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('sugerencias');
                                    handleTagSelection('Sugerencias');
                                }}
                            >
                                Sugerencias
                            </a>
                            <a
                                id='recientes'
                                className={`tag-black-ab ${selectedTag === 'recientes' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('recientes');
                                    handleTagSelection('Recientes');
                                }}
                            >
                                Recientes
                            </a>
                            <a
                                id='megusta'
                                className={`tag-black-ab ${selectedTag === 'megusta' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('megusta');
                                    handleTagSelection('Me Gusta');
                                }}
                            >
                                Me Gusta
                            </a>
                            <a
                                id='rock'
                                className={`tag-black-ab ${selectedTag === 'rock' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('rock');
                                    handleTagSelection('Rock');
                                }}
                            >
                                Rock
                            </a>
                            <a
                                id='country'
                                className={`tag-black-ab ${selectedTag === 'country' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('country');
                                    handleTagSelection('Country');
                                }}
                            >
                                Country
                            </a>
                            <a
                                id='soul'
                                className={`tag-black-ab ${selectedTag === 'soul' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('soul');
                                    handleTagSelection('Soul');
                                }}
                            >
                                Soul
                            </a>
                            <a
                                id='jazz'
                                className={`tag-black-ab ${selectedTag === 'jazz' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('jazz');
                                    handleTagSelection('Jazz');
                                }}
                            >
                                Jazz
                            </a>
                            <a
                                id='blues'
                                className={`tag-black-ab ${selectedTag === 'blues' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('blues');
                                    handleTagSelection('Blues');
                                }}
                            >
                                Blues
                            </a>
                            <a
                                id='hip-hop'
                                className={`tag-black-ab ${selectedTag === 'hip-hop' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('hip-hop');
                                    handleTagSelection('Hip-Hop');
                                }}
                            >
                                Hip-Hop
                            </a>
                            <a
                                id='pop'
                                className={`tag-black-ab ${selectedTag === 'pop' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('pop');
                                    handleTagSelection('Pop');
                                }}
                            >
                                Pop
                            </a>
                            <a
                                id='reggae'
                                className={`tag-black-ab ${selectedTag === 'reggae' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('reggae');
                                    handleTagSelection('Reggae');
                                }}
                            >
                                Reggae
                            </a>
                            <a
                                id='folk'
                                className={`tag-black-ab ${selectedTag === 'folk' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('folk');
                                    handleTagSelection('Folk');
                                }}
                            >
                                Folk
                            </a>
                            <a
                                id='rb'
                                className={`tag-black-ab ${selectedTag === 'rb' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('rb');
                                    handleTagSelection('R&B');
                                }}
                            >
                                R&B
                            </a>
                            <a
                                id='clasico'
                                className={`tag-black-ab ${selectedTag === 'clasico' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('clasico');
                                    handleTagSelection('Clásico');
                                }}
                            >
                                Clásico
                            </a>
                            <a
                                id='alternativo'
                                className={`tag-black-ab ${selectedTag === 'alternativo' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('alternativo');
                                    handleTagSelection('Alternativo');
                                }}
                            >
                                Alternativo
                            </a>
                            <a
                                id='ambiente'
                                className={`tag-black-ab ${selectedTag === 'ambiente' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('ambiente');
                                    handleTagSelection('Ambiente');
                                }}
                            >
                                Ambiente
                            </a>
                            <a
                                id='edm'
                                className={`tag-black-ab ${selectedTag === 'edm' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('edm');
                                    handleTagSelection('EDM');
                                }}
                            >
                                EDM
                            </a>
                            <a
                                id='electronica'
                                className={`tag-black-ab ${selectedTag === 'electronica' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('electronica');
                                    handleTagSelection('Electrónica');
                                }}
                            >
                                Electrónica
                            </a>
                            <a
                                id='disco'
                                className={`tag-black-ab ${selectedTag === 'disco' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('disco');
                                    handleTagSelection('Disco');
                                }}
                            >
                                Disco
                            </a>
                            <a
                                id='newage'
                                className={`tag-black-ab ${selectedTag === 'newage' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('newage');
                                    handleTagSelection('New Age');
                                }}
                            >
                                New Age
                            </a>
                            <a
                                id='punk'
                                className={`tag-black-ab ${selectedTag === 'punk' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('punk');
                                    handleTagSelection('Punk');
                                }}
                            >
                                Punk
                            </a>
                        </div>
                    </div>
                </div>

                <div className="ap-songs-container">
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                    <SongRowAñadir />
                </div>
            </BackgroundA>
        </>
    );
};

export default AñadirCancionesAPlaylist;
