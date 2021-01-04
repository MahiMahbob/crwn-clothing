import { addItemToCart } from "./shopUtils";

const shopReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'HIDE_DROPDOWN':
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        default:
            break;
    }
}

export default shopReducer