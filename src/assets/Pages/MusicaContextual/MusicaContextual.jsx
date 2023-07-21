import React, { useState } from 'react';
import './musicaContextual.css';
import HeaderA from '../../components/HeaderA/HeaderA';
import InputStyled from '../../components/InputStyled/InputStyled';
import BackgroundA from '../../components/BackgroundA/BackgroundA';

const customOptions = [
    { label: 'Ejercicio Físico', value: 'ejercicio-fisico' },
    { label: 'Limpieza', value: 'limpieza' },
    { label: 'Celebración', value: 'celebracion' },
    { label: 'Dormir', value: 'dormir' },
    { label: 'Meditar', value: 'meditar' },
    { label: 'Social', value: 'social' },
    { label: 'Estudiar', value: 'estudiar' },
    { label: 'Relajación', value: 'relajacion' },
    { label: 'Viajando', value: 'viajando' },
];

const customOptions2 = [
    { label: 'Prueba 1', value: 'ejercicio-fisico' },
    { label: 'Prueba 2', value: 'limpieza' },
    { label: 'Prueba 3', value: 'celebracion' },
];

const customOptions3 = [
    { label: 'Elemento A', value: 'ejercicio-fisico' },
    { label: 'Elemento B', value: 'limpieza' },
    { label: 'Elemento C', value: 'celebracion' },
];

export const MusicaContextual = () => {
    const [activeGenres, setActiveGenres] = useState([]);

    const handleGenreClick = (genre) => {
        if (activeGenres.includes(genre)) {
            setActiveGenres(activeGenres.filter((activeGenre) => activeGenre !== genre));
        } else {
            if (activeGenres.length < 3) {
                setActiveGenres([...activeGenres, genre]);
            }
        }
    };

    const isGenreActive = (genre) => activeGenres.includes(genre);

    const handleCreatePlaylistClick = () => {
        console.log('Los géneros seleccionados son:', activeGenres.join(', '));
        // Aquí puedes poner la lógica para cambiar a la siguiente pantalla o hacer lo que necesites.
        // Por ahora, solo imprimiremos un mensaje en la consola.
        console.log("Creando playlist...");
    };

    return (
        <>
            <BackgroundA>
                <HeaderA tituloPrincipal="Música Contextual" />

                <div className="bloque-a-MC-container">
                    <h4>¿Cuál es tu ocasión?</h4>
                    <InputStyled options={customOptions} /> {/* Pasa customOptions como prop */}
                </div>
                <div className="bloque-b-MC-container">
                    <h4>¿Cómo te sientes?</h4>
                    <InputStyled options={customOptions2} /> {/* Pasa customOptions como prop */}
                </div>
                <div className="bloque-c-MC-container">
                    <h4>¿Cómo esta el clima?</h4>
                    <InputStyled options={customOptions3} /> {/* Pasa customOptions como prop */}
                </div>

                <div className="filtros-container">
                    <div className="combobox-titulo-container">
                        <h4>Selecciona hasta 3 géneros</h4>
                    </div>

                    <div className='filters-box'>
                        <button
                            className={`tagstyle ${isGenreActive('rock') ? 'tagstyle-active' : ''}`}
                            id="rock"
                            onClick={() => handleGenreClick('rock')}
                        >
                            Rock
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('country') ? 'tagstyle-active' : ''}`}
                            id="country"
                            onClick={() => handleGenreClick('country')}
                        >
                            Country
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('soul') ? 'tagstyle-active' : ''}`}
                            id="soul"
                            onClick={() => handleGenreClick('soul')}
                        >
                            Soul
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('jazz') ? 'tagstyle-active' : ''}`}
                            id="jazz"
                            onClick={() => handleGenreClick('jazz')}
                        >
                            Jazz
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('blues') ? 'tagstyle-active' : ''}`}
                            id="blues"
                            onClick={() => handleGenreClick('blues')}
                        >
                            Blues
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('hiphop') ? 'tagstyle-active' : ''}`}
                            id="hiphop"
                            onClick={() => handleGenreClick('hiphop')}
                        >
                            Hip-Hop
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('pop') ? 'tagstyle-active' : ''}`}
                            id="pop"
                            onClick={() => handleGenreClick('pop')}
                        >
                            Pop
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('reggae') ? 'tagstyle-active' : ''}`}
                            id="reggae"
                            onClick={() => handleGenreClick('reggae')}
                        >
                            Reggae
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('folk') ? 'tagstyle-active' : ''}`}
                            id="folk"
                            onClick={() => handleGenreClick('folk')}
                        >
                            Folk
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('r&b') ? 'tagstyle-active' : ''}`}
                            id="r&b"
                            onClick={() => handleGenreClick('r&b')}
                        >
                            R&B
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('clasico') ? 'tagstyle-active' : ''}`}
                            id="clasico"
                            onClick={() => handleGenreClick('clasico')}
                        >
                            Clásico
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('alternativo') ? 'tagstyle-active' : ''}`}
                            id="alternativo"
                            onClick={() => handleGenreClick('alternativo')}
                        >
                            Alternativo
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('ambiente') ? 'tagstyle-active' : ''}`}
                            id="ambiente"
                            onClick={() => handleGenreClick('ambiente')}
                        >
                            Ambiente
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('edm') ? 'tagstyle-active' : ''}`}
                            id="edm"
                            onClick={() => handleGenreClick('edm')}
                        >
                            EDM
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('electronica') ? 'tagstyle-active' : ''}`}
                            id="electronica"
                            onClick={() => handleGenreClick('electronica')}
                        >
                            Electrónica
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('disco') ? 'tagstyle-active' : ''}`}
                            id="disco"
                            onClick={() => handleGenreClick('disco')}
                        >
                            Disco
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('newage') ? 'tagstyle-active' : ''}`}
                            id="newage"
                            onClick={() => handleGenreClick('newage')}
                        >
                            New Age
                        </button>
                        <button
                            className={`tagstyle ${isGenreActive('punk') ? 'tagstyle-active' : ''}`}
                            id="punk"
                            onClick={() => handleGenreClick('punk')}
                        >
                            Punk
                        </button>
                    </div>

                    <div className="button-container">
                        <button
                            className={`btn-create-playlist ${activeGenres.length > 0 ? 'active' : ''}`}
                            onClick={handleCreatePlaylistClick}
                        >
                            Crear Playlist
                        </button>
                    </div>
                </div>
            </BackgroundA>
        </>
    );
};
