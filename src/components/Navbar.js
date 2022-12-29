import { Form, Link, useNavigate } from 'react-router-dom'
import { useState } from "react"

import {BiSearchAlt2} from "react-icons/bi"

import './Navbar.css'
import logo from './logo.png'


const Navbar = () => {

  const [search, setSearch] = useState("")

  const Navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(!search) return

    Navigate(`/search?q=${search}`)
    setSearch("")
  }

  function menu() {
    window.location = '/'
  }


  return (
    <nav id='navbar'>
      <div className="imgLogo">
      <img to="/" className="logo" src={logo} alt="Cartax" onClick={menu}/>
      </div> 
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder="Buscar Filme" onChange={(e)=> setSearch(e.target.value)} value={search}/>    
            <button type="submit">
                <BiSearchAlt2/>
            </button>   
        </form>
      </div>   
    </nav>
  )
}

export default Navbar