import "./index.css";

import home from "../../../public/home.png";
import search from "../../../public/Vector.png";
import account from "../../../public/account.png";
import friends from "../../../public/friends.png";

const Nav_Bar = ({ homeOpacity, searchOpacity, accountOpacity, friendsOpacity }) => {
  return (
    <nav className="Nav_Bar-cont">
      <div className="Nav_Bar-element home" style={{ opacity: homeOpacity }}>
        <img src={home} alt="" className="Nav_Bar-element-img" />
        <p className="Nav_Bar-element-text">Inicio</p>
      </div>
      <div className="Nav_Bar-element search" style={{ opacity: searchOpacity }}>
        <img src={search} alt="" className="Nav_Bar-element-img" />
        <p className="Nav_Bar-element-text">Buscador</p>
      </div>
      <div className="Nav_Bar-element account" style={{ opacity: accountOpacity }}>
        <img src={account} alt="" className="Nav_Bar-element-img" />
        <p className="Nav_Bar-element-text">Perfil</p>
      </div>
      <div className="Nav_Bar-element friends" style={{ opacity: friendsOpacity }}>
        <img src={friends} alt="" className="Nav_Bar-element-img" />
        <p className="Nav_Bar-element-text">Amigos</p>
      </div>
    </nav>
  );
};

export default Nav_Bar;
