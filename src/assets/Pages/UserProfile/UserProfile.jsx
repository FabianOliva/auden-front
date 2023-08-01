import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import BackgroundC from "../../components/BackgroundC/BackgroundC";
import { useEffect, useState } from "react";
import CardPortadaSimple from "../../components/CardPortadaSimple/CardPortadaSimple";
import CardPortadaMultiple from "../../components/CardPortadaMultiple/CardPortadaMultiple";
import Nav_Bar from "../../components/Nav_bar";

export const UserProfile = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [DataUsers, setDataUsers] = useState([]);
  const [userPlaylistData, setUserPlaylistData] = useState([]);

  useEffect(() => {
    // We define an async function to fetch the data, so we can use await inside it
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/users/playlist/fabitti`);
        const data = await response.json();
        setDataUsers(data[0]);
        setUserPlaylistData(data);
        setLoading(false); // Once data is fetched and processed, set loading to false
      } catch (error) {
        console.log("fallo", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchData();
  }, []);

  const groupSongsByPlaylist = () => {
    // Creamos un objeto para agrupar las canciones por playlist_id
    const songsByPlaylist = {};

    // Iteramos sobre cada canción y las agrupamos por playlist_id
    userPlaylistData.forEach((songData) => {
      const playlistId = songData.playlist_id;
      if (!songsByPlaylist[playlistId]) {
        // Si la playlist no existe en el objeto, la creamos
        songsByPlaylist[playlistId] = {
          playlist_id: playlistId,
          playlist_name: songData.playlist_name,
          user_username: DataUsers.user_username,
          songs: [],
        };
      }
      // Agregamos la canción a la playlist correspondiente
      songsByPlaylist[playlistId].songs.push({
        song_name: songData.song_name,
        song_image_url: songData.song_image_url,
      });
    });

    return Object.values(songsByPlaylist); // Devolvemos un array de playlists
  };

  return (
    <>
      {!loading && (
        <BackgroundC>
          <div className="picture-name-container fade-in-left">
            <div className="picture-container">
              <div id="profile-photo" className="profile-photo">
                <img src="src/public/user-default.png" alt="" />
              </div>
            </div>

            <div className="name-container">
              <h2>{DataUsers.user_name}</h2>
              <h5>@{DataUsers.user_username}</h5>
              <Link to="/configuracion" className="gear-style">
                <span>
                  <img src="src/public/gear.svg" alt="" />
                </span>
              </Link>
            </div>
          </div>

          <div className="playlist-user-controls">
            <span>
              <h5>Mis Playlist</h5>
            </span>
            <img src="src/public/divider.svg" alt="" />
            <Link to="/crear-playlist">
              <div id="btn-crear-playlist" className="btn-crear-playlist">
                <a href="">Crear Playlist</a>
              </div>
            </Link>

          </div>

          <div className="playlist-box-container">
            {groupSongsByPlaylist().map((playlistData) => (
              <Link key={playlistData.playlist_id} to={`/playlist/${playlistData.playlist_id}`}>
                <CardPortadaMultiple
                  key={playlistData.playlist_id}
                  images={playlistData.songs.map((song) => song.song_image_url)}
                  name={playlistData.playlist_name}
                  user={playlistData.user_username}
                />
              </Link>
            ))}
          </div>

          <Nav_Bar />
        </BackgroundC>
      )}
    </>
  );
};
