import React from 'react'
import { useContextValue } from '../../context/shopContext'
import CartItem from '../cart-item/CartItem'
import { CartDropDwn, CartItems, CartDropdownButton, EmptyMessageContainer } from './CartDrpDwnStyles'

const CartDropdown = () => {
    const { cartItem } = useContextValue()
    return (
        <CartDropDwn>
            <CartItems>
                {cartItem.length ? cartItem.map(cartItm => <CartItem key={cartItm.id} item={cartItm} />)
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItems>
            <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
        </CartDropDwn>
    )
}

export default CartDropdown
