


export const state ={
    cart:[],
    searchKey:""
}

const ActionReducer = (state,action) => {
    switch (action.type) {
        case "ADD":
                 const item = state.cart.find((i)=>i.id===action.payload.id);
                 if(item){
                   return {
                    ...state,
                    cart:state.cart.map((i)=>i.id===action.payload.id?{
                        ...i,
                        qty:i.qty+1
                    }:i)
                   }
                 }else{
                    return {
                        ...state,cart:[...state.cart,{...action.payload,qty:1}]
                       }
                 }
               
            
           
            break;
            case "REMOVE":
                return{
                    ...state,
                    cart:state.cart.filter((i)=>i.id!==action.payload.id)
                }
           break;
           case "SEARCH":
            return{
             ...state,
             searchKey:action.payload
            }
        default:
            break;
    }
}

export default ActionReducer
