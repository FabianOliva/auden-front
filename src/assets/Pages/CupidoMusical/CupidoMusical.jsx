// import React, { useState } from 'react';
// import './cupidoMusical.css';
// import BackgroundA from '../Subcomponentes/BackgroundA/BackgroundA';
// import HeaderA from '../Subcomponentes/HeaderA/HeaderA';

// const artistas = [
//   { imagen: 'bad-bunny-cover.png', nombre: 'Bad Bunny' },
//   { imagen: 'biza-cover.png', nombre: 'Bizarap' },
//   { imagen: 'duki-cover.png', nombre: 'Duki' },
//   { imagen: 'eladio-cover.png', nombre: 'Eladio Carrion' },
//   { imagen: 'jhayco-cover.png', nombre: 'Jhay Cortes' },
//   { imagen: 'mike-cover.png', nombre: 'Mike Towers' },
//   { imagen: 'zaraza-cover.png', nombre: 'El Zarasa del Sabor' },
// ];

// export const CupidoMusical = () => {
//   const [likeList, setLikeList] = useState([]); // Estado que almacena artistas con like
//   const [currentArtistIndex, setCurrentArtistIndex] = useState(0); // Estado que cuenta el índice del artista actual

//   const handleLike = () => {
//     // Verificar si ya se alcanzó el límite de 6 likes
//     if (likeList.length >= 6) {
//       alert('¡Has alcanzado el límite de 6 likes!');
//       return;
//     }

//     const likedArtist = artistas[currentArtistIndex];
//     setLikeList([...likeList, likedArtist]); // Agregar el artista actual a la lista de "likes"
//     setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artistas.length); // Avanzar al siguiente artista o volver al inicio
//     console.log('Lista de likes:', [...likeList, likedArtist]);
//   };

//   const handleDislike = () => {
//     setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artistas.length); // Avanzar al siguiente artista o volver al inicio
//   };

//   return (
//     <>
//       <BackgroundA>
//         <HeaderA tituloPrincipal="Cupido Musical" />

//         <div className="cupido-musical-container">
//           <div className="image-artist-container">
//             <div className="cover-active">
//               <img src={`src/public/${artistas[currentArtistIndex].imagen}`} alt="" />
//             </div>

//             <div className="cover-next">
//               {currentArtistIndex + 1 < artistas.length ? (
//                 <img src={`src/public/${artistas[currentArtistIndex + 1].imagen}`} alt="" />
//               ) : (
//                 <img src={`src/public/${artistas[0].imagen}`} alt="" />
//               )}
//             </div>
//           </div>

//           <div className="tinder-controls">
//             <span className="button-container-rounded-ld" onClick={handleLike}>
//               <img src="src/public/vlike.svg" alt="" />
//             </span>
//             <span className="button-container-rounded-ld" onClick={handleDislike}>
//               <img src="src/public/rdislike.svg" alt="" />
//             </span>
//           </div>

//           <div className="artist-name">
//             <span>{artistas[currentArtistIndex].nombre}</span>
//           </div>
//         </div>

//         <div className="matches-actuales-container">
//           <div className="matches-ico-container">
//             <div className="matches-tittle-box-container">
//               <span>Matches actuales:</span>
//             </div>
//             <span id='rewind' className="button-container-rounded-ld">
//               <img src="src/public/rewind.svg" alt="" />
//             </span>
//           </div>

//           <div className="matches-generados-container">
//             {likeList.map((artista, index) => (
//               <div key={index} className="matches-cover">
//                 <img src={`src/public/${artista.imagen}`} alt={artista.nombre} />
//               </div>
//             ))}
//           </div>

//           <div className="button-container-cm">
//             <a href="">Generar Playlist</a>
//           </div>
//         </div>
//       </BackgroundA>
//     </>
//   );
// };


import React, { useState } from 'react';
import './cupidoMusical.css';
// import BackgroundA from '../Subcomponentes/BackgroundA/BackgroundA';
import BackgroundA from '../../components/BackgroundA/BackgroundA';
import HeaderA from '../../components/HeaderA/HeaderA';

const artistas = [
  { imagen: 'bad-bunny-cover.png', nombre: 'Bad Bunny' },
  { imagen: 'biza-cover.png', nombre: 'Bizarap' },
  { imagen: 'duki-cover.png', nombre: 'Duki' },
  { imagen: 'eladio-cover.png', nombre: 'Eladio Carrion' },
  { imagen: 'jhayco-cover.png', nombre: 'Jhay Cortes' },
  { imagen: 'mike-cover.png', nombre: 'Mike Towers' },
  { imagen: 'zaraza-cover.png', nombre: 'El Zarasa del Sabor' },
];

export const CupidoMusical = () => {
  const [likeList, setLikeList] = useState([]); // Estado que almacena artistas con like
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0); // Estado que cuenta el índice del artista actual

  const handleLike = () => {
    // Verificar si ya se alcanzó el límite de 6 likes
    if (likeList.length >= 6) {
      alert('¡Has alcanzado el límite de 6 likes!');
      return;
    }

    const likedArtist = artistas[currentArtistIndex];
    setLikeList([...likeList, likedArtist]); // Agregar el artista actual a la lista de "likes"
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artistas.length); // Avanzar al siguiente artista o volver al inicio
    console.log('Lista de likes:', [...likeList, likedArtist]);
  };

  const handleDislike = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % artistas.length); // Avanzar al siguiente artista o volver al inicio
  };

  const handleRewind = () => {
    // Deshacer el último like (remover el último artista de la lista de likes)
    setLikeList((prevLikes) => prevLikes.slice(0, -1));
  };

  return (
    <>
      <BackgroundA>
        <HeaderA tituloPrincipal="Cupido Musical" />

        <div className="cupido-musical-container">
          <div className="image-artist-container">
            <div className="cover-active">
              <img src={`src/public/${artistas[currentArtistIndex].imagen}`} alt="" />
            </div>

            <div className="cover-next">
              {currentArtistIndex + 1 < artistas.length ? (
                <img src={`src/public/${artistas[currentArtistIndex + 1].imagen}`} alt="" />
              ) : (
                <img src={`src/public/${artistas[0].imagen}`} alt="" />
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
            <span>{artistas[currentArtistIndex].nombre}</span>
          </div>
        </div>

        <div className="matches-actuales-container">
          <div className="matches-ico-container">
            <div className="matches-tittle-box-container">
              <span>Matches actuales:</span>
            </div>
            <span id='rewind' className="button-container-rounded-ld" onClick={handleRewind}>
              <img src="src/public/rewind.svg" alt="" />
            </span>
          </div>

          <div className="matches-generados-container">
            {likeList.map((artista, index) => (
              <div key={index} className="matches-cover slide-in-right">
                <img src={`src/public/${artista.imagen}`} alt={artista.nombre} />
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
