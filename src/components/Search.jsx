import React from 'react'
import { ContextApi } from '../context/ShopContext'
import "./Search.css"
function Search() {
    const{product:{searchKey},dispatch}=ContextApi()
    console.log(searchKey)
  return (
    <div className='search'>
      <form class="form-inline my-2 my-lg-0">
      <input  class="form-control mr-sm-2" type="search" placeholder="Search Products" aria-label="Search" onChange={(e)=>dispatch({
        type:"SEARCH",
        payload:e.target.value
      })} /> 
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  )
}

export default Search
