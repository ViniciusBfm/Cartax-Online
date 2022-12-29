import { useState, useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const searchURL = process.env.REACT_APP_SEARCH
const apiKey = process.env.REACT_APP_API_KEY;


const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  const getSearchMovies = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(()=>{
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    
    getSearchMovies(searchWithQueryURL)
  },[query])

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p className="carregando">Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search