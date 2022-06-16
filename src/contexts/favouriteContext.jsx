import React from 'react'

const favouriteContext = React.createContext({
    favouritePokemons: [],
    updateFavouritePokemons: (id) => null,
})

export const FavouriteProvider = favouriteContext.Provider

export default favouriteContext