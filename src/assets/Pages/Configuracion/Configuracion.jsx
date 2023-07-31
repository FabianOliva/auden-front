import React from 'react';
import "./Configuracion.css";
import BackgroundA from '../../components/BackgroundA/BackgroundA';
import HeaderA from '../../components/HeaderA/HeaderA';
import { Default_btn_Active, Default_btn_Inactive, Default_btn_login } from '../../components/Default_btn';
import BotonesDani from '../../components/BotonesDani/BotonesDaniNaranja';
import BotonesDaniNaranja from '../../components/BotonesDani/BotonesDaniNaranja';
import BotonesDaniNegro from '../../components/BotonesDani/BotonesDaniNegro';

const Configuracion = () => {
    // LE DICE A LA FLECHITA A QUE VENTANA TIENE QUE IR
    const userProfileUrl = '/user-profile';
    //_________________________________________________

    return (
        <>
            <BackgroundA>
                <HeaderA tituloPrincipal="Configuración" redirectUrl={userProfileUrl} />
                <BotonesDaniNaranja opcion="Consigue la version PRO" />
                <BotonesDaniNegro opcion="Editar Apariencia" />
                <BotonesDaniNegro opcion="Editar Perfil" />
                <BotonesDaniNegro opcion="Cambiar Contraseña" />

                <div className='config-footer'>
                    <span>Versión: V1.25.03</span>
                    <img src="src/public/divider-large.png" alt="" />
                    <span>Cerrar Sesión</span>
                </div>


            </BackgroundA>
        </>
    );
};

export default Configuracion;
