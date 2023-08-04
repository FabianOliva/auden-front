import React, { useEffect, useState } from "react";
import "./AñadirCancionesAPlaylist.css";
import { Link } from "react-router-dom";
import BackgroundA from "../../components/BackgroundA/BackgroundA";
import HeaderA from "../../components/HeaderA/HeaderA";
import SongRowAñadir from "../../components/SongRowAñadir/SongRowAñadir";
import BotonesDaniNaranja from "../../components/BotonesDani/BotonesDaniNaranja";
import Nav_Bar from "../../components/Nav_bar";
import cookies from "js-cookie";

const AñadirCancionesAPlaylist = () => {
  let playlistName2 = localStorage.getItem("playlistName");
  const [fetchDataSong, setFetchDataSong] = useState("");
  const [loading, setLoading] = useState("");
  const [dataUsers, setDataUsers] = useState("");
  const [error, setError] = useState("");

  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleToggleSongSelection = (songId) => {
    if (selectedSongs.includes(songId)) {
      setSelectedSongs(selectedSongs.filter((id) => id !== songId));
    } else {
      setSelectedSongs([...selectedSongs, songId]);
    }
  };
  let userData = localStorage.getItem("DataUsers");
  const parsedData = JSON.parse(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/joins`);
        const dataSongs = await response.json();
        setFetchDataSong(dataSongs);
        setLoading(false);
      } catch (error) {
        console.log("fallo", error);
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      const token = cookies.get("userToken");
      if (!token) {
        // Si no hay token almacenado en las cookies, el usuario no está autenticado.
        // Puedes manejar esta situación según tus requerimientos, por ejemplo, redirigiendo al usuario a la página de inicio de sesión.
      } else {
      }
      try {
        const response = await fetch(`http://localhost:3002/users/`, {
          headers: {
            "x-auth-token": token,
          },
        });
        const data = await response.json();
        setDataUsers(data[0]);
      } catch (error) {
        console.log("fallo", error);
      }
    };

    fetchData();
    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        user_id: parsedData.user_id,
        playlist_name: playlistName2,
        songs: selectedSongs,
      });

      let response = await fetch("http://localhost:3002/playlist/", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();

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

  const handleTagSelection = (tagId) => {
    console.log(`Usted ha elegido: ${tagId}`);
  };

  return (
    <>
      <BackgroundA>
        <HeaderA tituloPrincipal={playlistName2} redirectUrl="/home" />
        <div className="añadirCanciones-buscador-container ">
          <div className="ab-buscador-container fade-in-right">
            <img className="lupa" src="src/public/vector.svg" alt="" />
            <input type="text" placeholder="Buscar" />
            <img src="src/public/micro.svg" alt="" />
          </div>
          <div className="ab-tags-container fade-in-left">
            <div className="tag-orange-ab2">Sugerencias</div>
            <div className="tags-desplegables-box">
              {/* <a  id='sugerencias'
                                className={`tag-black-ab ${selectedTag === 'sugerencias' ? 'tag-orange-ab' : ''}`}
                                href="#"
                                onClick={() => {
                                    handleTagClick('sugerencias');
                                    handleTagSelection('Sugerencias');}}>
                                Sugerencias
                            </a> */}
              <a
                id="recientes"
                className={`tag-black-ab ${selectedTag === "recientes" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("recientes");
                  handleTagSelection("Recientes");
                }}>
                Recientes
              </a>
              <a
                id="megusta"
                className={`tag-black-ab ${selectedTag === "megusta" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("megusta");
                  handleTagSelection("Me Gusta");
                }}>
                Me Gusta
              </a>
              <a
                id="rock"
                className={`tag-black-ab ${selectedTag === "rock" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("rock");
                  handleTagSelection("Rock");
                }}>
                Rock
              </a>
              <a
                id="country"
                className={`tag-black-ab ${selectedTag === "country" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("country");
                  handleTagSelection("Country");
                }}>
                Country
              </a>
              <a
                id="soul"
                className={`tag-black-ab ${selectedTag === "soul" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("soul");
                  handleTagSelection("Soul");
                }}>
                Soul
              </a>
              <a
                id="jazz"
                className={`tag-black-ab ${selectedTag === "jazz" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("jazz");
                  handleTagSelection("Jazz");
                }}>
                Jazz
              </a>
              <a
                id="blues"
                className={`tag-black-ab ${selectedTag === "blues" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("blues");
                  handleTagSelection("Blues");
                }}>
                Blues
              </a>
              <a
                id="hip-hop"
                className={`tag-black-ab ${selectedTag === "hip-hop" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("hip-hop");
                  handleTagSelection("Hip-Hop");
                }}>
                Hip-Hop
              </a>
              <a
                id="pop"
                className={`tag-black-ab ${selectedTag === "pop" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("pop");
                  handleTagSelection("Pop");
                }}>
                Pop
              </a>
              <a
                id="reggae"
                className={`tag-black-ab ${selectedTag === "reggae" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("reggae");
                  handleTagSelection("Reggae");
                }}>
                Reggae
              </a>
              <a
                id="folk"
                className={`tag-black-ab ${selectedTag === "folk" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("folk");
                  handleTagSelection("Folk");
                }}>
                Folk
              </a>
              <a
                id="rb"
                className={`tag-black-ab ${selectedTag === "rb" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("rb");
                  handleTagSelection("R&B");
                }}>
                R&B
              </a>
              <a
                id="clasico"
                className={`tag-black-ab ${selectedTag === "clasico" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("clasico");
                  handleTagSelection("Clásico");
                }}>
                Clásico
              </a>
              <a
                id="alternativo"
                className={`tag-black-ab ${selectedTag === "alternativo" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("alternativo");
                  handleTagSelection("Alternativo");
                }}>
                Alternativo
              </a>
              <a
                id="ambiente"
                className={`tag-black-ab ${selectedTag === "ambiente" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("ambiente");
                  handleTagSelection("Ambiente");
                }}>
                Ambiente
              </a>
              <a
                id="edm"
                className={`tag-black-ab ${selectedTag === "edm" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("edm");
                  handleTagSelection("EDM");
                }}>
                EDM
              </a>
              <a
                id="electronica"
                className={`tag-black-ab ${selectedTag === "electronica" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("electronica");
                  handleTagSelection("Electrónica");
                }}>
                Electrónica
              </a>
              <a
                id="disco"
                className={`tag-black-ab ${selectedTag === "disco" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("disco");
                  handleTagSelection("Disco");
                }}>
                Disco
              </a>
              <a
                id="newage"
                className={`tag-black-ab ${selectedTag === "newage" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("newage");
                  handleTagSelection("New Age");
                }}>
                New Age
              </a>
              <a
                id="punk"
                className={`tag-black-ab ${selectedTag === "punk" ? "tag-orange-ab" : ""}`}
                href="#"
                onClick={() => {
                  handleTagClick("punk");
                  handleTagSelection("Punk");
                }}>
                Punk
              </a>
            </div>
          </div>
        </div>

        <div className="ap-songs-container fade-in-right">
          {fetchDataSong &&
            fetchDataSong.map((song) => (
              <SongRowAñadir
                key={song.song_id}
                name={song.song_name}
                artist={song.artist_name}
                url={song.song_image_url}
                isAdded={selectedSongs.includes(song.song_id)}
                onToggleSongSelection={() => handleToggleSongSelection(song.song_id)}
              />
            ))}
        </div>
        <div className="fade-in-left">
          <a className="Default_btn actived" onClick={handleSubmit}>
            Generar tu Playlist
          </a>
        </div>
      </BackgroundA>
      <Nav_Bar />
    </>
  );
};

export default AñadirCancionesAPlaylist;
