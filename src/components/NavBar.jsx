import React from 'react'
import favouriteContext from '../contexts/favouriteContext';


const {useContext} = React;

const NavBar = () => {
    const {favouritePokemons} = useContext(favouriteContext);

    const imageNavBar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png '
    const bichito = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//698.png'
    const bichito2 = 'https://assets.nintendo.com/image/upload/ar_4:3,c_pad,dpr_2.0,f_auto,q_auto,w_400/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/egdp/pokemon-2'
  return (
    <>
    <nav>
        <div />
            <div>
                <img src={bichito} alt='bichito-raro' className='navbar-image'></img>
                <img src={imageNavBar} alt='Logo-Pokemon' className='navbar-image'></img>
                <img src={bichito2} alt='bichito-raro-2' className='navbar-image'></img>
            </div>
            <div>
            ❤️ {favouritePokemons.length}
            </div>
    </nav>
    </>
  )
}

export default NavBar