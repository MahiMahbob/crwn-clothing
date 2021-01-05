import React from 'react'
import { useHistory } from 'react-router-dom'
import { useContextValue } from '../../context/shopContext'
import CartItem from '../cart-item/CartItem'
import { CartDropDwn, CartItems, CartDropdownButton, EmptyMessageContainer } from './CartDrpDwnStyles'

const CartDropdown = () => {
    const { cartItem,hideDropDown } = useContextValue()
    const history = useHistory()

    const handleClick = () => {
        history.push('/checkout')

        hideDropDown()
    }
    
    return (
        <CartDropDwn>
            <CartItems>
                {cartItem.length ? cartItem.map(cartItm => <CartItem key={cartItm.id} item={cartItm} />)
                    :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItems>
            <CartDropdownButton onClick={handleClick}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropDwn>
    )
}

export default CartDropdown
