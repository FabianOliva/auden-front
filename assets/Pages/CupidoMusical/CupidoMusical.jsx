import React, { useState, useEffect } from "react";
import "./cupidoMusical.css";
import BackgroundA from "../../components/BackgroundA/BackgroundA";
import HeaderA from "../../components/HeaderA/HeaderA";

export const CupidoMusical = () => {
  const [likeList, setLikeList] = useState([]);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongData(data); // Actualizar el estado con los datos del fetch
      })
      .catch((error) => console.error("Error en las solicitudes:", error));
  }, []);

  const handleLike = () => {
    if (likeList.length >= 6) {
      alert("¡Has alcanzado el límite de 6 likes!");
      return;
    }

    const likedArtist = songData[currentArtistIndex];
    setLikeList([...likeList, likedArtist]);
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % songData.length);
    console.log("Lista de likes:", [...likeList, likedArtist]);
  };

  const handleDislike = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % songData.length);
  };

  const handleRewind = () => {
    setLikeList((prevLikes) => prevLikes.slice(0, -1));
  };

  // Verificar si songData está vacío antes de usarlo
  if (songData.length === 0) {
    return <div>Cargando...</div>;
  }

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
            {likeList.map((song, index) => (
              <div key={index} className="matches-cover slide-in-right">
                <img src={song.song_image_url} alt={song.song_name} />
              </div>
            ))}
          </div>

          <div className="button-container-cm">
            <a href="">Generar Playlist</a>
          </div>
        </div>
      </BackgroundA>
    </>
  );
};
