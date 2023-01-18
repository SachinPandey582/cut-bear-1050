import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCEEDED,
  SORTINGFROMHTL,
} from "./Product.Action.type";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case SORTINGFROMHTL:
      let newData = state.data.sort((a, b) => {
        return b.Price - a.Price;
      });
      return {
        ...state,
        data: newData,
      };
    default: {
      return state;
    }
  }
};
