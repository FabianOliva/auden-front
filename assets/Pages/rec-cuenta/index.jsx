import React from "react";
import "./rc.css";

export const Recuperarcuenta = () => {
  const mostrarModal = (e) => {
    e.preventDefault();
    let modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
  };
  const ocultarModal = (e) => {
    e.preventDefault();
    let modal = document.querySelector(".modal");
    modal.classList.add("hidden");
  };
  return (
    <div>
      <div className="login_container">
        <nav className="navbar_container">
          <a href="http://localhost:5173/login">
            {" "}
            <img src="src\public\left-icon-placeholder.png" alt="<-" />
          </a>
          <p>Recuperar Cuenta</p>
          <div className="relleno"></div>
        </nav>
        <form action="">
          <div className="form_container_login">
            <div className="labels_input register">
              <label htmlFor="">
                <p>Nombre de Usuario o E-mail:</p>
                <input type="text" />

                <div className="footer register">
                  <p>
                    Deberas poder ingresar al e-mail de la cuenta para poder
                    recuperarla
                  </p>
                </div>
              </label>
            </div>
            <a onClick={mostrarModal} className="Default_btn active create">
              Continuar
            </a>
          </div>
        </form>
      </div>
      <div className="modal  hidden">
        <div className="modal_recuperar slide-in-blurred-top">
          <p>Te enviamos mensaje a (Correo) con un link verificador</p>
          <img src="src\public\avion-de-papel.png" alt="" />
          <p>
            Para recuperar tu ceunta debes ingresar al mismo y luego seguir las
            instrucciones
          </p>
          <a onClick={ocultarModal} className="Default_btn active recpuperar">
            Entendido
          </a>
        </div>
      </div>
    </div>
  );
};
