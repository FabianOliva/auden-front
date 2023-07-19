// import React, { useState } from 'react';
// import '../AppFooterControls/AppFooterControls.css';

// const AppFooterControls = () => {
//   // Use state to keep track of the active icon
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (iconId) => {
//     setActiveIcon(iconId);
//   };

//   return (
//     <>
//       <div className="footerControls-container">
//         <div
//           id="home"
//           className={`footerControls-ico-container ${activeIcon === 'home' ? 'icono-activo' : ''}`}
//           onClick={() => handleIconClick('home')}
//         >
//           <div className="ico">
//             <img src="src/public/home-inactivo.svg" alt="" />
//           </div>
//           <div className="ico-text-container">
//             <span>Home</span>
//           </div>
//         </div>

//         <div
//           id="search"
//           className={`footerControls-ico-container ${activeIcon === 'search' ? 'icono-activo' : ''}`}
//           onClick={() => handleIconClick('search')}
//         >
//           <div className="ico">
//             <img src="src/public/search-inactivo.svg" alt="" />
//           </div>
//           <div className="ico-text-container">
//             <span>Buscador</span>
//           </div>
//         </div>

//         <div
//           id="perfil"
//           className={`footerControls-ico-container ${activeIcon === 'perfil' ? 'icono-activo' : ''}`}
//           onClick={() => handleIconClick('perfil')}
//         >
//           <div className="ico">
//             <img src="src/public/user-inactivo.svg" alt="" />
//           </div>
//           <div className="ico-text-container">
//             <span>Perfil</span>
//           </div>
//         </div>

//         <div
//           id="amigos"
//           className={`footerControls-ico-container ${activeIcon === 'amigos' ? 'icono-activo' : ''}`}
//           onClick={() => handleIconClick('amigos')}
//         >
//           <div className="ico">
//             <img src="src/public/friends-inactivo.svg" alt="" />
//           </div>
//           <div className="ico-text-container">
//             <span>Amigos</span>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default AppFooterControls;


import React, { useState } from 'react';
import '../AppFooterControls/AppFooterControls.css';

const AppFooterControls = () => {
  // Use state to keep track of the active icon
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconId) => {
    setActiveIcon(iconId);
  };

  // Define the mapping of icon names to active and inactive image names
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
