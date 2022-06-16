
//Este codigo trae la api de forma async, al usar el buscador se cambia el link por el parametro pokemon
export const searchPokemon = async (pokemon) =>{
    try{
        let URL_API = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(URL_API)
        //guarda la informacion en data y la regresa toda la informacion de un kokemon
        const data = await response.json()
        return data
    }catch(err){

    }
}

//esto trae la cantidad de pokemons que hay en la api, por defecto 40 y 0
export const getPokemones = async (limit = 40, offset = 0) =>{
    try{
        let URL_API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(URL_API)

        //guarda la informacion en data y la regresa
        const data = await response.json()
        return data
    }catch(err){

    }
}

//pide la info del kokemon que quiero a la api y la regresa
export const getPokemonesData = async (url) =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){

    }

}