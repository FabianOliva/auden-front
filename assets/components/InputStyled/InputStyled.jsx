import React from "react";
import Select from "react-select";
import "./InputStyled.css";

const InputStyled = ({ options }) => {
  return (
    <>
      <Select
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "orange",
            primary: "none",
          },
        })}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        className="custom-select-container"
        styles={{
          control: (provided) => ({
            ...provided,
            border: "none",
            backgroundColor: "transparent",
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }),
          menu: (provided) => ({
            marginTop: "2px",
            zIndex: 2,
            width: "100%",
            maxHeight: "none",
            backgroundColor: "white",
            borderTop: "2px solid black",
            color: "black",
            borderBottomLeftRadius: "16px",
            border: "2px transparent black",
            boxShadow: "none",
            overflow: "hidden",
          }),
          option: (provided, state) => ({
            ...provided,
            textAlign: "left",
            paddingLeft: "10px",
            borderBottom: "2px solid gray",
            "&:hover": {
              border: `3px solid rgba(255, 142, 10, 1)`,
              backgroundColor: "white",
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            paddingLeft: 0,
            fontFamily: "Rubik",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.5px",
            textAlign: "left",
          }),
          input: (provided) => ({
            ...provided,
            outline: "none",
          }),
        }}
        placeholder="Elije una opcion"
      />
    </>
  );
};

export default InputStyled;
