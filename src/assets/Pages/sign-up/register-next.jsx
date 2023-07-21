import React from "react";

export const Registeruser = () => {
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <img src="src\public\left-icon-placeholder.png" alt="<-" />
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form action="">
        <p className="p_title">Ingresa un nombre de usuario y contraseña.</p>
        <div className="form_container_login">
          <div className="labels_input register">
            {/* --------------INPUT NAME--------------- */}
            <div className="labels_input name error">
              {/* ADD ERROR or OK */}
              <label htmlFor="">
                <p>Nombre de Usuario</p>
                <input type="text" />
                <span className="name_span error">
                  {/* ADD ERROR or OK */}
                  El nombre de usuario no está disponible
                </span>
                {/* --------------INPUT PASSWORD--------------- */}
              </label>{" "}
            </div>
            <div className="labels_input password ok">
              {/* ADD ERROR or OK */}
              <label htmlFor="">
                <p>Contraseña:</p>
                <input type="text" />
                <span className="password_span ok">
                  {/* ADD ERROR or OK */}
                  Deberá contener al menos 8 caracteres.
                </span>
                <div className="check">
                  <input type="checkbox" name="" id="" />
                  <p className="terms">
                    He leído y acepto los <a href="">Términos</a> y{" "}
                    <a href="">Condiciones</a>.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <a className="Default_btn standar" href="">
            Continuar
          </a>
        </div>
      </form>
    </div>
  );
};

//
