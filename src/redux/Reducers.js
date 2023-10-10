import { appConstants } from "../enum/constants";

const initialState = {
    title: null,
    items: [],
    cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case appConstants.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case appConstants.SET_DATA:
      return {
        ...state,
        items: action.payload,
        title: action.payload.title
      };
    default:
      return state;
  }
};

export default rootReducer;
  