import {
  ADDED_TO_CART,
  DECREAESE_COUNT_QUANTITY,
  DELETE_THE_ITEMS,
  INCREAESE_COUNT_QUANTITY,
  REMOVED_FROM_CART,
} from "./Cart.ActionType";

const initStateOfCart = {
  data: [],
};

export const CartReducer = (state = initStateOfCart, action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        data: [...state.data, action.payload],
        // make sure to bring here the object here
      };

    case REMOVED_FROM_CART:
      return {
        data: action.payload,
        // make sure to bring the array here
      };

    case INCREAESE_COUNT_QUANTITY:
      let newDataofIncreased = state.data.map((el) =>
        el.id === action.payload ? { ...el, Quant: el.Quant + 1 } : el
      );
      return {
        data: newDataofIncreased,
      };

    case DECREAESE_COUNT_QUANTITY:
      let newDataofDecrease1 = state.data.map((el) =>
        el.id === action.payload ? { ...el, Quant: el.Quant - 1 } : el
      );
      return {
        data: newDataofDecrease1,
      };
    case DELETE_THE_ITEMS:
      let newFilterdData3 = state.data.filter((el) => el.id !== action.payload);
      return {
        data: newFilterdData3,
      };
    default: {
      return state;
    }
  }
};
