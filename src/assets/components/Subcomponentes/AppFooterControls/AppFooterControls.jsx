import React, { useState } from 'react';
import '../AppFooterControls/AppFooterControls.css';

const AppFooterControls = () => {
  // Use state to keep track of the active icon
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setActiveIcon(iconId);
  };

  return (
    <>
      <div className="footerControls-container">
        <div
          id="home"
          className={`footerControls-ico-container ${activeIcon === 'home' ? 'icono-activo' : ''}`}
          onClick={() => handleIconClick('home')}
        >
          <div className="ico">
            <img src="src/public/hogar.svg" alt="" />
          </div>
          <div className="ico-text-container">
            <span>Home</span>
          </div>
        </div>

        <div
          id="search"
          className={`footerControls-ico-container ${activeIcon === 'search' ? 'icono-activo' : ''}`}
          onClick={() => handleIconClick('search')}
        >
          <div className="ico">
            <img src="src/public/lupa.svg" alt="" />
          </div>
          <div className="ico-text-container">
            <span>Buscador</span>
          </div>
        </div>

        <div
          id="perfil"
          className={`footerControls-ico-container ${activeIcon === 'perfil' ? 'icono-activo' : ''}`}
          onClick={() => handleIconClick('perfil')}
        >
          <div className="ico">
            <img src="src/public/avatar.svg" alt="" />
          </div>
          <div className="ico-text-container">
            <span>Perfil</span>
          </div>
        </div>

        <div
          id="amigos"
          className={`footerControls-ico-container ${activeIcon === 'amigos' ? 'icono-activo' : ''}`}
          onClick={() => handleIconClick('amigos')}
        >
          <div className="ico">
            <img src="src/public/personas.svg" alt="" />
          </div>
          <div className="ico-text-container">
            <span>Amigos</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default AppFooterControls;
