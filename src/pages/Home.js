import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard";

import './MovieGrid.css'

import background from './background.jpg'

const moviesURL = process.env.REACT_APP_API
const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(()=>{
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedURL)
  },[])
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${background})` }}>
        <h2 className="title">Os Melhores Filmes</h2>
        <div className="movies-container">
          {topMovies.length === 0 && <div className="carregando"><h2>Carregando...</h2></div>}
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>

    </div>
  )
}

export default Home