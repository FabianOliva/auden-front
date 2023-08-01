import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  // Obtener el objeto de navegación
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setError("El campo de correo electrónico no puede estar vacío.");
    } else if (!emailRegex.test(email)) {
      setError("El correo electrónico ingresado no es válido.");
    } else {
      setError("");
      window.location.href = `/Registeruser?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <div className="login_container">
      <nav className="navbar_container">
        <Link to="/">
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </Link>
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form className="Register_form">
        <p className="p_title">¿Cuál es tu correo electrónico?</p>
        <div className="form_container_login">
          <div className="labels_input register">
            <label htmlFor="email">
              <p>Correo electrónico:</p>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder={error ? "El campo no debe estar vacío" : ""}
                className={error ? "InputError" : ""}
              />
              <div className="footer register">
                <p>Deberás poder confirmarlo luego</p>
              </div>
            </label>
          </div>
          <Link
            to={{
              pathname: "/Registeruser",
              state: { email },
            }}
            className={`Default_btn actived register ${error ? "disabled" : ""}`}
            onClick={handleSubmit}>
            Continuar
          </Link>
        </div>
      </form>
    </div>
  );
};
