import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Registeruser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Obtener el objeto de ubicación
  const location = useLocation();
  const emailFromLocation = location.search.split("=")[1];

  // Actualizar el estado del correo electrónico con el valor de la ubicación
  useEffect(() => {
    setEmail(decodeURIComponent(emailFromLocation));
  }, [emailFromLocation]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        user_username: username,
        user_userpassword: password,
        user_email: email,
      });

      let response = await fetch("http://localhost:3002/users/register", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();
      console.log(data);

      if (response.ok) {
        window.location.href = `/login`;
      } else {
        const data = await response.json();
        setError(data.message || "Error al crear el usuario.");
      }
    } catch (error) {
      setError("Error al crear el usuario.");
    }
  };

  return (
    <div className="login_container">
      <nav className="navbar_container">
        <Link to="/register">
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </Link>
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form className="Registeruser_Form" action="" onSubmit={handleSubmit}>
        <p className="p_title">Ingresa un nombre de usuario y contraseña.</p>
        <div className="form_container_login">
          <div className="labels_input register">
            {/* --------------INPUT NAME--------------- */}
            <div className="labels_input name error">
              {/* ADD ERROR or OK */}
              <label className="label_p" htmlFor="">
                <p>Nombre de Usuario</p>
                <input type="text" value={username} onChange={handleUsernameChange} />
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

                <input type="password" value={password} onChange={handlePasswordChange} />

                <span className="password_span ok">
                  {/* ADD ERROR or OK */}
                  Deberá contener al menos 8 caracteres.
                </span>
                <div className="check">
                  <input type="checkbox" className="checkbox" name="" />
                  <p className="terms">
                    He leído y acepto los <a href="">Términos</a> y <a href="">Condiciones</a>.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <button type="submit" className="Default_btn standar">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

//
