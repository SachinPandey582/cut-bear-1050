import { ADDED_TO_CART, REMOVED_FROM_CART } from "./Cart.ActionType";

const initStateOfCart = {
  data: [],
};



export const CartReducer = (state = initStateOfCart, action) => {
    switch (action.type) {
      case ADDED_TO_CART:
        return {
          data:[action.payload]
          // make sure to bring here the object here 
          
        }

        case REMOVED_FROM_CART:

        return {
data:action.payload
// make sure to bring the array here
            }  
      default: {
        return state;
      }
    }
  };
