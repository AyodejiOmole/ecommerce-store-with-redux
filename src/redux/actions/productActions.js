import { actionTypes } from "../constants/action-types"; 

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addItemToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item
    }
}