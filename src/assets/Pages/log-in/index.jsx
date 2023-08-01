import React, { useState, useEffect } from "react";
import "./index.css";
import cookies from "js-cookie"

export const Login = () => {
  //Diseño
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //---------------USER-VALIDATOR---------------/

  const [fetchDatUser, setFetchDataUser] = useState([]);

  const fetchDataUser = async () => {
    try {
      const response = await fetch(`http://localhost:3002/users`);
      const dataUsers = await response.json();
      setFetchDataUser(dataUsers);
      console.log(dataUsers);
      //setLoading(false);
    } catch (error) {
      console.log("fallo al traer usuarios", error);
      //setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDataUser();
  }, []);

  const login = async ()=>{
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
         "user_username": formData.nombreoemail,
         "user_userpassword": formData.password
     }
     );
     
     let response = await fetch("http://localhost:3002/users/login", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
     cookies.set("userToken", data.token, { expires: 1 })
     console.log(data);
  }
  //--------------------------VALIDAR-----------------------//

  const [formData, setFormData] = useState({
    nombreoemail: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    login()
  };
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <a href="http://localhost:5173/">
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
          <div className="labels_input">
            <label htmlFor="">
              <p>Nombre de Usuario o E-mail:</p>
              <input
                type="text"
                name="nombreoemail"
                value={formData.nombreoemail}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* -------------INPUT PASSWORD------------- */}
          <div className="labels_input passwordd ">
            <label htmlFor="">
              <p>Contraseña:</p>
              <div className="input_img">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {/* ... Resto del código ... */}
              </div>
            </label>
          </div>
          {/*----------- BUTTON------------- */}
          <div className="footer">
            <a
              onClick={handleSubmit}
              href="http://localhost:5173/home"
              className="Default_btn standar"
            >
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
