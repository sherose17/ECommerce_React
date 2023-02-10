import React from 'react'

import { ContextApi } from '../context/ShopContext'
import "./Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const{product:{cart},dispatch}=ContextApi()
  const subTotal =(a,b)=>{
    return a*b
  }
  let {totalItems, totalPrice} = cart.reduce((acc,cur)=>{
    acc.totalItems +=cur.qty
    acc.totalPrice += cur.price*cur.qty
    return acc
  },{
    totalItems:0,
    totalPrice:0,
  })
  
  return (
    <div className='container'>
      {cart.length>0 ? (<div>
        <div>
        <table className="table">
  <thead className="thead">
    <tr>
      
      <th className="pro">Product</th>
      <th className="name">Name</th>
      <th className="qty">Qty</th>
      <th className="pr">Price</th>
    
      <th scope="col">Sub Total</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    {cart?.map((item)=>(
      <tr  key={item.id}>
      <td><img className='img' src={item.thumbnail} alt="img"></img></td>      
      <td className='thead'>{item.title}</td>
      <td>{item.qty}</td>
      <td>{new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
}).format(item.price)}
</td>
      <td>{subTotal(item.price,item.qty)}</td>
      <DeleteIcon onClick={()=>dispatch({
        type:"REMOVE",
        payload:item
      })}></DeleteIcon>
      
    </tr>

    ))}

    
    
  </tbody>
</table>


<table class="table table-borderless table-dark">
  <thead>
    <tr>
      <th scope="col">Cart Items in the Cart</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{totalItems}</th>
      <th scope="row">{totalPrice}</th>

    </tr>
    
    
  </tbody>
</table></div>

      </div>):(<h1 className="htext">Your Cart is empty </h1>)}
     

      
     
    </div>
  )
}

export default Cart
