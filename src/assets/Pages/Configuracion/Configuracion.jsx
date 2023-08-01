import React from 'react';
import BackgroundA from '../../components/BackgroundA/BackgroundA';
import HeaderA from '../../components/HeaderA/HeaderA';

const Configuracion = () => {
    // LE DICE A LA FLECHITA A QUE VENTANA TIENE QUE IR
    const userProfileUrl = '/user-profile';
    //_________________________________________________

    return (
        <>
            <BackgroundA>
                <HeaderA tituloPrincipal="Configuración" redirectUrl={userProfileUrl} />
            </BackgroundA>
        </>
    );
};

export default Configuracion;
