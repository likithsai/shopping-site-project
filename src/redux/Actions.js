import { appConstants } from "../enum/constants";

export const addToCart = (product) => ({
  type: appConstants.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: appConstants.REMOVE_FROM_CART,
  payload: productId,
});

export const setData = (products) => ({
  type: appConstants.SET_DATA,
  payload: products,
});
  