import { createContext ,useReducer,useState,useContext} from "react";
import Cart from "../pages/cart";
import {state} from "./ActionReducer";
import ActionReducer from "./ActionReducer";


export const CartContext = createContext()


export const Context =(props)=>{
const [product,dispatch] = useReducer(ActionReducer,state)
console.log(product)
    return <CartContext.Provider value={{product,dispatch}} >{props.children}</CartContext.Provider>
}


export const ContextApi =() =>useContext(CartContext)