import { addItemToCart, ItemRemovesFromCart } from "./shopUtils";

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
        case 'UPDATE_SHOPDATA':
            return {
                ...state,
                shopData: action.payload,
                loading: false
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItem: ItemRemovesFromCart(state.cartItem, action.payload)
            }
        case 'CLEAR_ITEM':
            return {
                ...state,
                cartItem: state.cartItem.filter(crtItem => crtItem.id !== action.payload.id)
            }
        case 'SET_AMOUNT':
            return {
                ...state,
                amountCount: state.cartItem.map(item => item.quantity).reduce((total, quantity) => total += quantity,0),
                total: state.cartItem.reduce((total, current) => total + current.quantity * current.price,0)
            } 
        default:
            break;
    }
}

export default shopReducer