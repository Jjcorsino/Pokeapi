import "./App.css";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import { getPokemones, getPokemonesData, searchPokemon } from "./api";
import { FavouriteProvider } from "./contexts/favouriteContext";
import Swal from "sweetalert2";

//esto es para que el localstorage se guarde en el navegador
const localStorageKey = "favouritePokemons";

function App() {
  const [pokemones, setPokemones] = useState([]); //array de pokemones
  const [page, setPage] = useState(0); //pagina actual
  const [loading, setLoading] = useState(true); //inicia la pagina en loading
  const [favourites, setFavourites] = useState([]); //inicia el array de favoritos vacio

  //esto trae todos los kokemones de la api
  const fetchPokemones = async () => {
    try {
      setLoading(true);
      const data = await getPokemones(40, 40 * page);
      const promises = data.results.map(async (pokemon) => {
        //esto no entendi ni wea
        return await getPokemonesData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemones(results);
      //una vez que cargo los kokemones, cambio el estado de loading a false
      setLoading(false);
    } catch (err) {}
  };

  const loadFavouritePokemons = () => {
    const favouritePokemons =
      JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setFavourites(favouritePokemons);
  };

  //esto guarda los kokemones favoritos en el local storage
  useEffect(() => {
    loadFavouritePokemons();
  }, []);

  //corre este codigo solo la primera vez que termina de renderizar el componente
  useEffect(() => {
    fetchPokemones();
  }, [page]);

  const updateFavouritePokemons = (name) => {
    const newFavourites = [...favourites];
    const isFavourite = newFavourites.indexOf(name);
    if (isFavourite >= 0) {
      newFavourites.splice(isFavourite, 1);
    } else {
      newFavourites.push(name);
    }
    setFavourites(newFavourites);
    //se actualiza el localstorage con el nuevo array de favoritos
    localStorage.setItem(localStorageKey, JSON.stringify(newFavourites));
  };

  const onSearch = async (search) => {
    //se busca el pokemon que quiero
    const result = await searchPokemon(search);

    if (!result) {
      return Swal.fire({
        title: "Error",
        text: "Personaje no encontrado",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      setPokemones([result]);
    }
  };

  //le pasamos la informacion de la api a pagination
  return (
    <FavouriteProvider
      value={{
        favouritePokemons: favourites,
        updateFavouritePokemons: updateFavouritePokemons,
      }}
    >
      <div>
        <NavBar />
        <div className="App">
          <SearchBar onSearch={onSearch} />
          <Pokedex
            pokemones={pokemones}
            page={page}
            setPage={setPage}
            loading={loading}
          />
        </div>
      </div>
    </FavouriteProvider>
  );
}

export default App;
