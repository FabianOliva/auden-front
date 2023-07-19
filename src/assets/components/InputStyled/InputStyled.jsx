import React from 'react';
import Select from 'react-select';
import BackgroundA from '../BackgroundA/BackgroundA';
import './InputStyled.css'; // Importa el archivo CSS

const customOptions = [
    { label: 'Ejercicio Físico', value: 'ejercicio-fisico' },
    { label: 'Limpieza', value: 'limpieza' },
    { label: 'Celebración', value: 'celebracion' },
    { label: 'Dormir', value: 'dormir' },
    { label: 'Meditar', value: 'meditar' },
    { label: 'Social', value: 'social' },
    { label: 'Estudiar', value: 'estudiar' },
    { label: 'Relajación', value: 'relajacion' },
    { label: 'Viajando', value: 'viajando' },
];

const InputStyled = () => {
    return (
        <>
            <BackgroundA>
                <Select
                    options={customOptions}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    className="custom-select-container"
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            border: 'none', // Elimina el borde del input
                            backgroundColor: 'transparent', // Elimina el fondo del input
                            '&:focus': {
                                outline: 'none', // Elimina el contorno al hacer clic en el input
                                boxShadow: 'none', // Elimina la sombra al hacer clic en el input
                            },
                        }),
                        menu: (provided) => ({
                            ...provided,
                            zIndex: 2, // Asegura que el menú se muestre por encima de otros elementos
                            width: 320, // Establece el ancho del menú desplegable en 320px
                            maxHeight: 'none', // Elimina la altura máxima para mostrar todos los elementos sin scroll
                            backgroundColor: 'white',
                            color: 'black',
                            borderTopRightRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '2px solid black',
                            boxShadow: 'none', // Elimina la sombra si no se necesita
                            overflow: 'hidden', // Elimina el desplazamiento del menú
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            borderBottom: '2px solid black', // Agrega un borde sólido negro de 2px a cada elemento del menú
                            '&:hover': {
                                border: `3px solid rgba(255, 142, 10, 1)`,
                                backgroundColor: 'white',
                            },
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            paddingLeft: '5%',
                            fontFamily: 'Rubik',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0.5px',
                            textAlign: 'left',
                        }),
                        input: (provided) => ({
                            ...provided,
                            outline: 'none', // Elimina el recuadro al hacer clic y escribir en el input
                            // Add any additional styles for the input if needed
                        }),
                    }}
                    placeholder="Actividad"
                />
            </BackgroundA>
        </>
    );
};

export default InputStyled;
