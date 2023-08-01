// import React from 'react'
// import '../SearchConFiltros/SearchConFiltros.css';

// const SearchConFiltros = () => {
//     return (
//         <>
//             <div className='search-container'>
//                 <div className='search-format'>
//                     <div className="lupa-search-container">
//                         <img src="src/public/lupa.svg" alt="" />
//                     </div>

//                     <input id='busqueda' className='search-style' type="text" placeholder='Buscar' />
//                     <div className="micro-container">
//                         <img src="src/public/micro.svg" alt="" />
//                     </div>
//                 </div>

//                 <div className="boton-search-container">
//                     <button className='button-search-filter-tag'>Orden generado</button>
//                     <button className='button-search-filter' id='titulo-filter'>Titulo</button>
//                     <button className='button-search-filter' id='artista-filter'>Artista</button>
//                     <button className='button-search-filter' id='album-filter'>Album</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchConFiltros;

import React, { useState } from 'react';
import './SearchConFiltros.css';

const SearchConFiltros = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterName) => {
    if (activeFilter === filterName) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterName);
    }

    console.log(`Se activó el filtro ${filterName}`);
  };

  return (
    <>
      <div className='search-container'>
        <div className='search-format'>
          <div className="lupa-search-container">
            <img src="src/public/lupa.svg" alt="" />
          </div>

          <input id='busqueda' className='search-style' type="text" placeholder='Buscar' />
          <div className="micro-container">
            <img src="src/public/micro.svg" alt="" />
          </div>
        </div>

        <div className="boton-search-container">
          <button
            className={`button-search-filter-tag ${activeFilter === 'Orden generado' ? 'button-active-filter' : ''}`}
            onClick={() => handleFilterClick('Orden generado')}
          >
            Orden generado
          </button>
          <button
            className={`button-search-filter ${activeFilter === 'Titulo' ? 'button-active-filter' : ''}`}
            onClick={() => handleFilterClick('Titulo')}
            id='titulo-filter'
          >
            Titulo
          </button>
          <button
            className={`button-search-filter ${activeFilter === 'Artista' ? 'button-active-filter' : ''}`}
            onClick={() => handleFilterClick('Artista')}
            id='artista-filter'
          >
            Artista
          </button>
          <button
            className={`button-search-filter ${activeFilter === 'Album' ? 'button-active-filter' : ''}`}
            onClick={() => handleFilterClick('Album')}
            id='album-filter'
          >
            Album
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchConFiltros;
