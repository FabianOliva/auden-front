import "./musicaContextual.css";
import HeaderA from "../../components/HeaderA/HeaderA";
import InputStyled from "../../components/InputStyled/InputStyled";
import BackgroundA from "../../components/BackgroundA/BackgroundA";
import React, { useState, useEffect } from "react";

const customOptions = [
  { label: "Ejercicio Físico", value: "ejercicio-fisico" },
  { label: "Limpieza", value: "limpieza" },
  { label: "Celebración", value: "celebracion" },
  { label: "Dormir", value: "dormir" },
  { label: "Meditar", value: "meditar" },
  { label: "Social", value: "social" },
  { label: "Estudiar", value: "estudiar" },
  { label: "Relajación", value: "relajacion" },
  { label: "Viajando", value: "viajando" },
];

const customOptions2 = [
  { label: "Feliz", value: "ejercicio-fisico" },
  { label: "Triste", value: "limpieza" },
  { label: "Euforico", value: "celebracion" },
];

const customOptions3 = [
  { label: "Soleado", value: "ejercicio-fisico" },
  { label: "Lluvioso", value: "limpieza" },
  { label: "Nublado", value: "celebracion" },
];

export const MusicaContextual = () => {
  const [activeGenres, setActiveGenres] = useState([]);
  const [error, setError] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        user_id: userDatas[0].user_id,
        playlist_name: "Musica Contextual",
        songs: randomSongs,
      });

      let response = await fetch("http://localhost:3002/playlist/", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();
      console.log(data);

      if (response.ok) {
        console.log("Playlist Creada");
        window.location.href = "http://localhost:5173/user-profile";
      } else {
        const data = await response.json();
        setError(data.message || "Error al crear la playlist.");
      }
    } catch (error) {
      setError("Error al crear la playlist2.");
    }
  };

  const [randomSongs, setRandomSongs] = useState([]);
  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/songs");
        const data = await response.json();
        const allSongs = data; // Todas las canciones obtenidas desde el servidor

        // Obtener 10 canciones aleatorias
        const randomIndexes = generateRandomIndexes(allSongs.length, 10);
        const randomSongs = randomIndexes.map((index) => allSongs[index]);

        // Almacenar los song_id de las canciones aleatorias en un array
        const randomSongIds = randomSongs.map((song) => song.song_id);

        // Actualizar el estado con los song_id de las canciones aleatorias
        setRandomSongs(randomSongIds);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let userData = localStorage.getItem("DataUsername");
    fetch(`http://localhost:3002/users/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDatas(data); // Actualizar el estado con los datos del fetch
      })
      .catch((error) => console.error("Error en las solicitudes:", error));
  }, []);

  // Función para generar 'count' índices aleatorios entre 0 y 'max'
  const generateRandomIndexes = (max, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  return (
    <>
      <BackgroundA>
        <HeaderA tituloPrincipal="Música Contextual" redirectUrl="/home" />

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

          <div className="filters-box">
            <button
              className={`tagstyle ${isGenreActive("rock") ? "tagstyle-active" : ""}`}
              id="rock"
              onClick={() => handleGenreClick("rock")}>
              Rock
            </button>
            <button
              className={`tagstyle ${isGenreActive("country") ? "tagstyle-active" : ""}`}
              id="country"
              onClick={() => handleGenreClick("country")}>
              Country
            </button>
            <button
              className={`tagstyle ${isGenreActive("soul") ? "tagstyle-active" : ""}`}
              id="soul"
              onClick={() => handleGenreClick("soul")}>
              Soul
            </button>
            <button
              className={`tagstyle ${isGenreActive("jazz") ? "tagstyle-active" : ""}`}
              id="jazz"
              onClick={() => handleGenreClick("jazz")}>
              Jazz
            </button>
            <button
              className={`tagstyle ${isGenreActive("blues") ? "tagstyle-active" : ""}`}
              id="blues"
              onClick={() => handleGenreClick("blues")}>
              Blues
            </button>
            <button
              className={`tagstyle ${isGenreActive("hiphop") ? "tagstyle-active" : ""}`}
              id="hiphop"
              onClick={() => handleGenreClick("hiphop")}>
              Hip-Hop
            </button>
            <button
              className={`tagstyle ${isGenreActive("pop") ? "tagstyle-active" : ""}`}
              id="pop"
              onClick={() => handleGenreClick("pop")}>
              Pop
            </button>
            <button
              className={`tagstyle ${isGenreActive("reggae") ? "tagstyle-active" : ""}`}
              id="reggae"
              onClick={() => handleGenreClick("reggae")}>
              Reggae
            </button>
            <button
              className={`tagstyle ${isGenreActive("folk") ? "tagstyle-active" : ""}`}
              id="folk"
              onClick={() => handleGenreClick("folk")}>
              Folk
            </button>
            <button
              className={`tagstyle ${isGenreActive("r&b") ? "tagstyle-active" : ""}`}
              id="r&b"
              onClick={() => handleGenreClick("r&b")}>
              R&B
            </button>
            <button
              className={`tagstyle ${isGenreActive("clasico") ? "tagstyle-active" : ""}`}
              id="clasico"
              onClick={() => handleGenreClick("clasico")}>
              Clásico
            </button>
            <button
              className={`tagstyle ${isGenreActive("alternativo") ? "tagstyle-active" : ""}`}
              id="alternativo"
              onClick={() => handleGenreClick("alternativo")}>
              Alternativo
            </button>
            <button
              className={`tagstyle ${isGenreActive("ambiente") ? "tagstyle-active" : ""}`}
              id="ambiente"
              onClick={() => handleGenreClick("ambiente")}>
              Ambiente
            </button>
            <button
              className={`tagstyle ${isGenreActive("edm") ? "tagstyle-active" : ""}`}
              id="edm"
              onClick={() => handleGenreClick("edm")}>
              EDM
            </button>
            <button
              className={`tagstyle ${isGenreActive("electronica") ? "tagstyle-active" : ""}`}
              id="electronica"
              onClick={() => handleGenreClick("electronica")}>
              Electrónica
            </button>
            <button
              className={`tagstyle ${isGenreActive("disco") ? "tagstyle-active" : ""}`}
              id="disco"
              onClick={() => handleGenreClick("disco")}>
              Disco
            </button>
            <button
              className={`tagstyle ${isGenreActive("newage") ? "tagstyle-active" : ""}`}
              id="newage"
              onClick={() => handleGenreClick("newage")}>
              New Age
            </button>
            <button
              className={`tagstyle ${isGenreActive("punk") ? "tagstyle-active" : ""}`}
              id="punk"
              onClick={() => handleGenreClick("punk")}>
              Punk
            </button>
          </div>

          <div className="button-container">
            <button className={`btn-create-playlist actived`} onClick={handleSubmit}>
              Crear Playlist
            </button>
          </div>
        </div>
      </BackgroundA>
    </>
  );
};
