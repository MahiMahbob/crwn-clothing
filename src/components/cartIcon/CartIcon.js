import React from 'react'
import { useContextValue } from '../../context/shopContext'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyles'

const CartIcon = () => {
    const {hideCartDropDown, amountCount} = useContextValue()
    return (
        <CartContainer onClick={hideCartDropDown}>
            <ShoppingIcon/>
            <ItemCountContainer>{amountCount}</ItemCountContainer>
        </CartContainer>
    )
}

export default CartIcon
