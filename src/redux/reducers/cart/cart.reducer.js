import { actionTypes } from "../../constants/action-types";
import { addToCart, removeFromCart } from "./cart.utils";

const cartInitialState = {
    cartItems : [

    ]
}

const cartReducer = ( state = cartInitialState , { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                cartItems: addToCart(state.cartItems, payload)
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                cartItems: removeFromCart(state.cartItems, payload)
            };
        default: 
            return state;
    }
}

export default cartReducer;