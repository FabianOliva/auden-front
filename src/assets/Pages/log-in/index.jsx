import React, { useState, useEffect } from "react";
import "./index.css";
import cookies from "js-cookie";

export const Login = () => {
  const [error, setError] = useState(null);
  const [fetchDatUser, setFetchDataUser] = useState([]);

  //--------------------------FETCH-----------------------//
  const fetchDataUser = async () => {
    try {
      const response = await fetch(`http://localhost:3002/users`);
      const dataUsers = await response.json();
      setFetchDataUser(dataUsers);
      localStorage.removeItem("DataUsername");
    } catch (error) {
      console.log("fallo al traer usuarios", error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  //--------------------------LOGIN-----------------------//
  const login = async () => {
    let headersList = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      user_username: formData.nombreoemail,
      user_userpassword: formData.password,
    });

    let response = await fetch("http://localhost:3002/users/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    if (response.ok) {
      let data = await response.json();
      const token = data.token; // Obtener el token de la respuesta
      cookies.remove("userToken");
      cookies.set("userToken", token, { expires: 1 });

      // Redirigir al usuario a la siguiente página después del inicio de sesión exitoso
      window.location.href = "http://localhost:5173/home";
    } else {
      // Si el inicio de sesión falla, puedes mostrar un mensaje de error
      console.log("Inicio de sesión fallido");
      let errorResponse = await response.json();
      const errorMessage = errorResponse.mensaje;
      setError(errorMessage);
    }
  };

  //--------------------------VALIDAR-----------------------//

  const [formData, setFormData] = useState({
    nombreoemail: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Reiniciar el campo en emptyFields cuando cambie el contenido del campo
    setEmptyFields((prevEmptyFields) => ({
      ...prevEmptyFields,
      [name]: false,
    }));
  };

  //        Validacion de inputs en Front

  const [hasErrors, setHasErrors] = useState(false);

  const [formErrors, setFormErrors] = useState({
    nombreoemail: "",
    password: "",
  });

  const [emptyFields, setEmptyFields] = useState({
    nombreoemail: false,
    password: false,
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    const emptyFieldsTemp = { ...emptyFields };

    // Validation for nombreoemail field
    if (!formData.nombreoemail) {
      errors.nombreoemail = "El nombre de usuario o e-mail es requerido.";
      emptyFieldsTemp.nombreoemail = true;
      isValid = false;
    } else {
      emptyFieldsTemp.nombreoemail = false;
    }

    // Validation for password field
    if (!formData.password) {
      errors.password = "La contraseña es requerida.";
      emptyFieldsTemp.password = true;
      isValid = false;
    } else {
      emptyFieldsTemp.password = false;
    }

    setFormErrors(errors);
    setEmptyFields(emptyFieldsTemp);
    setHasErrors(!isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await login();
        localStorage.setItem("DataUsername", formData.nombreoemail);
      } catch (error) {
        // Handle any errors that might occur during login
        console.error("An error occurred during login:", error);
        // Add code here to display an error message to the user
      }
    }
  };

  return (
    <div className="login_container">
      <nav className="navbar_container">
        <a href="/">
          {" "}
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </a>

        <p>Iniciar Sesión</p>
        <div className="relleno"></div>
      </nav>
      {/* FORM */}
      <form action="">
        <div className="form_container_login">
          {/* --------------INPUT NAME--------------- */}
          <div className={`labels_input ${error ? "error" : ""}`}>
            <label htmlFor="">
              <p>Nombre de Usuario o E-mail:</p>
              <input
                type="text"
                name="nombreoemail"
                value={formData.nombreoemail}
                onChange={handleChange}
                className={emptyFields.nombreoemail ? "InputError " : ""}
                placeholder={emptyFields.nombreoemail ? "Este campo es requerido." : ""}
              />
            </label>
          </div>
          {/* -------------INPUT PASSWORD------------- */}
          <div className="labels_input passwordd">
            <label htmlFor="">
              <p>Contraseña:</p>
              <div className={`input_img ${error ? "error" : ""}`}>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={emptyFields.password ? "InputError" : ""}
                  placeholder={emptyFields.password ? "Este campo es requerido." : ""}
                />
              </div>
            </label>
            {error && <div className="errorlogin">Credenciales Inválidas</div>}
          </div>
          {/*----------- BUTTON------------- */}
          <div className="footer">
            <a
              onClick={handleSubmit}
              className={`Default_btn ${
                hasErrors || !formData.nombreoemail || !formData.password ? "standar" : "actived"
              }`}
              disabled={hasErrors || !formData.nombreoemail || !formData.password}>
              Iniciar Sesión
            </a>
            <a href="http://localhost:5173/recuperarcuenta">
              <p>¿Olvidaste tu contraseña?</p>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
