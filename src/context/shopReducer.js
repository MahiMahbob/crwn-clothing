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
        case 'SET_TOTAL':
            return {
                ...state,
                total: state.cartItem.map(item => item.quantity).reduce((total, quantity) => total += quantity,0)
                
            }
            
        default:
            break;
    }
}

export default shopReducer