import React, { useState, useEffect } from "react";
import "./cupidoMusical.css";
import BackgroundA from "../../components/BackgroundA/BackgroundA";
import HeaderA from "../../components/HeaderA/HeaderA";

export const CupidoMusical = () => {
  const [likeList, setLikeList] = useState([]);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [songData, setSongData] = useState([]);
  const [userDatas, setUserDatas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongData(data); // Actualizar el estado con los datos del fetch
      })
      .catch((error) => console.error("Error en las solicitudes:", error));
  }, []);

  useEffect(() => {
    let userData = localStorage.getItem("DataUsername");
    fetch(`http://localhost:3002/users/${userData}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDatas(data); // Actualizar el estado con los datos del fetch
        console.log(userDatas);
      })
      .catch((error) => console.error("Error en las solicitudes:", error));
  }, []);

  const handleLike = () => {
    if (likeList.length >= 6) {
      alert("¡Has alcanzado el límite de 6 likes!");
      return;
    }

    const likedSong = songData[currentArtistIndex];
    setLikeList([...likeList, likedSong.song_id]); // Agregar el song_id al array de likes
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % songData.length);
  };

  const handleDislike = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % songData.length);
  };

  const handleRewind = () => {
    // Eliminar el último song_id del array de likes
    setLikeList((prevLikes) => prevLikes.slice(0, -1));
  };

  // Verificar si songData está vacío antes de usarlo
  if (songData.length === 0) {
    return <div>Cargando...</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        user_id: userDatas[0].user_id,
        playlist_name: "Cupido Musical",
        songs: likeList,
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

  return (
    <>
      <BackgroundA>
        <HeaderA tituloPrincipal="Cupido Musical" redirectUrl="/home" />

        <div className="cupido-musical-container">
          <div className="image-artist-container">
            <div className="cover-active">
              <img src={songData[currentArtistIndex].song_image_url} alt="" />
            </div>

            <div className="cover-next">
              {currentArtistIndex + 1 < songData.length ? (
                <img src={songData[currentArtistIndex + 1].song_image_url} alt="" />
              ) : (
                <img src={songData[0].song_image_url} alt="" />
              )}
            </div>
          </div>
          <div className="tinder-controls">
            <span className="button-container-rounded-ld" onClick={handleLike}>
              <img src="src/public/vlike.svg" alt="" />
            </span>
            <span className="button-container-rounded-ld" onClick={handleDislike}>
              <img src="src/public/rdislike.svg" alt="" />
            </span>
          </div>

          <div className="artist-name">
            <span>{songData[currentArtistIndex].song_name}</span>
          </div>
        </div>

        <div className="matches-actuales-container">
          <div className="matches-ico-container">
            <div className="matches-tittle-box-container">
              <span>Matches actuales:</span>
            </div>
            <span id="rewind" className="button-container-rounded-ld" onClick={handleRewind}>
              <img src="src/public/rewind.svg" alt="" />
            </span>
          </div>

          <div className="matches-generados-container">
            {likeList.map((songId, index) => {
              // Buscar la canción correspondiente al song_id en songData
              const likedSong = songData.find((song) => song.song_id === songId);

              // Verificar si se encontró la canción antes de mostrarla
              if (likedSong) {
                return (
                  <div key={index} className="matches-cover slide-in-right">
                    <img src={likedSong.song_image_url} alt={likedSong.song_name} />
                  </div>
                );
              } else {
                // Si no se encuentra la canción, podrías manejarlo de alguna forma (omitir o mostrar un mensaje de error)
                return null;
              }
            })}
          </div>

          <div className="button-container-cm">
            <a onClick={handleSubmit} href="">
              Generar Playlist
            </a>
          </div>
        </div>
      </BackgroundA>
    </>
  );
};
