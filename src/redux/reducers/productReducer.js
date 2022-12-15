import { actionTypes } from "../constants/action-types"

const initialState = {
    products: [
        
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCT:
            return {...state, products: payload};
        default: 
            return state;
    }
}

export const selectedProductReducer = ( state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default: 
            return state;
    }
}

