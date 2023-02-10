import axios from 'axios'
import "./shop.css"
import {  ContextApi } from '../context/ShopContext'
import React from 'react'
import { useEffect ,useState} from 'react'

function Shop() {
  
  const {dispatch,product:{searchKey}}=ContextApi()
  const [products, setProducts] = useState([])
     useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(function (response) {
          // handle success
          setProducts(response.data.products)
          //console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
   
    },[])
 return (
    <div className='products'>
 
    {products.filter((p)=>p.title.toLowerCase().includes(searchKey))
    .map((p)=>{
    return <div key={p.id}>
      <img className='img' src={p.images[0]} alt=""></img>
      <p>{p.title}</p>
    <h2>{p.rating}</h2>

      <h2>{new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
}).format(p.price)}</h2>
      <button onClick={()=>dispatch({type:"ADD",payload:p,})} className='addToCartBttn'>Add to Cart</button>
  </div>
})}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

</div> 
  )
}

export default Shop







