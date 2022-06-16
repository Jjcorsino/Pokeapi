import React, { useState } from "react";
import Swal from "sweetalert2";


const SearchBar = (props) => {
  //regresa un array y actualiza el estado
  const [search, setSearch] = useState("");
  //trae del componente padre el onsearch
  const { onSearch } = props;

  //detecta el cambio de valor del input y reemplaza el valor actual de search
  const onChange = (event) => {
    setSearch(event.target.value);
  };

  //Inserta lo que pongas en el input, al darle click al boton, en el link de la api y trae la info a data
  const onClick = async (event) => {
    event.preventDefault();
    if(!search.trim()){
      return Swal.fire({
          title: 'Advertencia',
          text: 'No podes ingresar un dato vacio',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
      })
  }
    onSearch(search.trim().toLowerCase());

  };
  
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button> 
      </div>  
    </div>
  );
};

export default SearchBar;
