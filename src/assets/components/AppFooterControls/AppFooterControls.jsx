import React, { useState } from 'react';
import './AppFooterControls.css';

const AppFooterControls = () => {
  // trakea que icono esta activo
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setActiveIcon(iconId);
  };

  // mapeo de iconos
  const iconImages = {
    'home': {
      inactive: 'home-inactivo.svg',
      active: 'home-activo.svg',
    },
    'search': {
      inactive: 'search-inactivo.svg',
      active: 'search-activo.svg',
    },
    'perfil': {
      inactive: 'user-inactivo.svg',
      active: 'user-activo.svg',
    },
    'amigos': {
      inactive: 'friends-inactivo.svg',
      active: 'friends-activo.svg',
    },
  };

  return (
    <>
      <div className="footerControls-container">
        {Object.keys(iconImages).map((icon) => (
          <div
            key={icon}
            id={icon}
            className={`footerControls-ico-container ${activeIcon === icon ? 'icono-activo' : ''}`}
            onClick={() => handleIconClick(icon)}
          >
            <div className="ico">
              <img
                src={`src/public/${activeIcon === icon ? iconImages[icon].active : iconImages[icon].inactive}`}
                alt=""
              />
            </div>
            <div className="ico-text-container">
              <span>{icon}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppFooterControls;



