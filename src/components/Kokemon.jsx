import React, {useContext} from 'react'
import favouriteContext from '../contexts/favouriteContext'


const Kokemon = (props) => {
    const {pokemon} = props 
    const { favouritePokemons, updateFavouritePokemons } = useContext(favouriteContext)

    const redHeart = '💖'
    const blackHeart = '🖤'
    const heart = favouritePokemons.includes(pokemon.name) ? redHeart : blackHeart

    const clickHeart = (e) => {
        e.preventDefault()
        updateFavouritePokemons(pokemon.name)
    }

    const type = pokemon.types[0].type.name
    const style ="pokemon-card " + type;

  return (
    <div className={style}>
        <div className='pokemon-img'>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/> 
        </div>
        <div className='card-body'> 
            <div className='card-top'>
                <h3>{pokemon.name}</h3> 
                <h3>#{pokemon.id}</h3> 
            </div>
            <div className='card-bot'>
                <div className='card-type'>{type}</div>
                <div className='card-stats'>
                    <p>HP: {pokemon.stats[0].base_stat}</p>
                    <p>Atk: {pokemon.stats[1].base_stat}</p>
                </div>
                
                <button onClick={clickHeart}>
                <div className="pokemon-favourite">{heart}</div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Kokemon