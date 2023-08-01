import "./index.css";

import home from "../../../public/home.png";
import search from "../../../public/Vector.png";
import account from "../../../public/account.png";
import friends from "../../../public/friends.png";
import { NavLink } from "react-router-dom";

const Nav_Bar = () => {
  return (
    <nav className="Nav_Bar-cont">
      <NavLink className="a" to="/home">
        <div className="Nav_Bar-element home">
          <img src={home} alt="" className="Nav_Bar-element-img" />
          <p className="Nav_Bar-element-text">Inicio</p>
        </div>
      </NavLink>
      <NavLink className="a" to="/search">
        <div className="Nav_Bar-element search">
          <img src={search} alt="" className="Nav_Bar-element-img" />
          <p className="Nav_Bar-element-text">Buscador</p>
        </div>
      </NavLink>
      <NavLink className="a" to="/user-profile">
        <div className="Nav_Bar-element account">
          <img src={account} alt="" className="Nav_Bar-element-img" />
          <p className="Nav_Bar-element-text">Perfil</p>
        </div>
      </NavLink>
      <NavLink className="a" to="/amigos">
        <div className="Nav_Bar-element friends">
          <img src={friends} alt="" className="Nav_Bar-element-img" />
          <p className="Nav_Bar-element-text">Amigos</p>
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav_Bar;
