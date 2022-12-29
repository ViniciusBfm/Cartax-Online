import { useState, useEffect } from "react";
import {useParams, useSearchParams} from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard"

import './Movie.css'

import back from './back.jpg'

const moviesURL = process.env.REACT_APP_API
const apiKey = process.env.REACT_APP_API_KEY;


const Movie = () => {
  const {id} = useParams()
  const [movie,setMovie] = useState(null)

  const getMovie = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }
  const formatCurrency = (number) =>{
    return number.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(()=>{
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  },[])
  return (
    <div className="movie-page" style={{ backgroundImage: `url(${back})` }}>
      {movie && (
      <>
      <div className="moviecardgeral">
        <MovieCard movie={movie} showLink={false}/>
      </div>
       <div className="infoGeral">
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3><BsWallet2/>Orçamento:</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3><BsGraphUp/>Faturamento:</h3>
            <p>{(formatCurrency(movie.revenue))}</p>
          </div>
          <div className="info">
            <h3><BsHourglassSplit/>Duração:</h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3><BsFillFileEarmarkTextFill/>Sinopse</h3>
            <p>{movie.overview}</p>
          </div>
       </div>
      </>
      )}
    </div>
  )
}

export default Movie