import React from 'react'
import { useContext } from 'react'
import { ContextApi ,CartContext} from '../context/ShopContext'
import "./Cart.css"

const Cart = () => {
  const{product:{cart},dispatch}=ContextApi()
  
  return (
    <div>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
    
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    {cart?.map((item)=>(
      <tr key={item.id}>
      <td><img className='img' src={item.thumbnail}></img></td>      
      <td>{item.title}</td>
      <td>{item.qty}</td>
      <td>{item.price}</td>
      <td>{item.price*item.qty}</td>
      <button onClick={()=>dispatch({
        type:"REMOVE",
        payload:item
      })} type="button" class="btn btn-danger">Remove</button>
    </tr>

    ))}

    
    
  </tbody>
</table>


  
      
     
    </div>
  )
}

export default Cart
