import { useState,useContext } from "react";
import { PhoneContext } from "./context";



export const Add =(id) =>{
  
    const products =useContext(PhoneContext)
    // const [post,setpost]= useState(products.context)

    const AddToCart = products.AddToCart
    AddToCart(id)
  




   
}



export const initialState = {
    basket:[],
    user: null
};

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export const getTotal = (basket) =>{
    if (basket.length==0){
        return 0
    }
    else{
      let total = getUnique(basket, 'price')
      const newTotal = [...total]
      let sum = newTotal.reduce((a, b) => a + b, 0)
      return sum

      

    }

}

function reducer(state, action) {


  
    switch (action.type) {
        
        case "ADD_TO_BASKET":
            Add(action.item.id)
            return {...state,
                
                basket: [...state.basket, action.item]
            }

            
        case "SET_USER":
            return{...state,
                        user:action.user
                    }
            
        case "REMOVE_FROM_BASKET":
            let newbasket = [...state,
                ...state.basket]
            const index = state.basket.findIndex((item) => item.id===action.id)
            
            if (index >=0){
              newbasket.splice(index,1);
             
             
            }

            else{
                console.warn(
                    `Cannot find product (id: ${action.id}) as it is not in the basket`
                );
            }
            return {basket:newbasket }

            
        
        default:
            return state

    }

}

export default reducer;