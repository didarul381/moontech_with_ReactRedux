
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actionTypes"

 export const addTocart = (product)=>{

    return{
        type:ADD_TO_CART,
        payload:product
    };
};

export const  removeFromCart = (product) =>{
       return{
        type:REMOVE_FROM_CART,
        payload:product,
       }
}  