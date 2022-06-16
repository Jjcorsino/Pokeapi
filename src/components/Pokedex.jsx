import React from 'react'
import Kokemon from './Kokemon'
import Pagination from './Pagination'

const Pokedex = (props) => {
  const { pokemones, page, setPage, loading} = props

  const lastPage = () => {
    const nextPage = page - 1
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = page + 1
    setPage(nextPage)
  }

  return (
    <>
    <div className='pokedex-container'>
        <h1>Pokedex mamadisima</h1>
        <Pagination 
        page = {page + 1}
        totalPages = {29}
        onLeftClick = {() => {
          lastPage()
        }}
        onRightClick = {() => {
          nextPage()
        }}
        />
    </div>
    {
          loading ? <div className='cargando'>Cargando kokemones...</div> : 
    <div className='pokemon-container'>
       {pokemones.map((pokemon, index) => { //map recorre el array y retorna cada elemento del api
        return(
        <Kokemon pokemon={pokemon} key={pokemon.name}/>          
        )
       })}
    </div>
}
    </>
  )
}

export default Pokedex