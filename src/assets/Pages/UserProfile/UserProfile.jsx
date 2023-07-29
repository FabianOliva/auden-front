import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import BackgroundC from "../../components/BackgroundC/BackgroundC";
import { useEffect, useState } from "react";
import CardPortadaSimple from "../../components/CardPortadaSimple/CardPortadaSimple";
import CardPortadaMultiple from "../../components/CardPortadaMultiple/CardPortadaMultiple";
import Nav_Bar from "../../components/Nav_bar";

export const UserProfile = () => {
  const [DataUsers, setDataUsers] = useState([]);
  const [userPlaylistData, setUserPlaylistData] = useState([]);

  const userData = async () => {
    try {
      const response = await fetch(`http://localhost:3002/users/account/fabitti`);
      const dataUsers = await response.json();
      setDataUsers(dataUsers[0]);
      console.log(dataUsers[0].user_name);
    } catch (error) {
      console.log("fallo", error);
    }
  };

  const userPlaylists = async () => {
    try {
      const response = await fetch(`http://localhost:3002/users/playlist/fabitti`);
      const dataPlaylist = await response.json();
      setUserPlaylistData(dataPlaylist);
      console.log(dataPlaylist);
    } catch (error) {
      console.log("fallo", error);
    }
  };

  useEffect(() => {
    userData();
    userPlaylists();
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
          <div id="btn-crear-playlist" className="btn-crear-playlist">
            <a href="">Crear Playlist</a>
          </div>
        </div>

        <div className="playlist-box-container">
          {groupSongsByPlaylist().map((playlistData) => (
            <CardPortadaMultiple
              key={playlistData.playlist_id}
              images={playlistData.songs.map((song) => song.song_image_url)}
              name={playlistData.playlist_name}
              user={playlistData.user_username}
            />
          ))}
        </div>

        <Nav_Bar />
      </BackgroundC>
    </>
  );
};
