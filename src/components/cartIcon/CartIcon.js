import React from 'react'
import { useContextValue } from '../../context/shopContext'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyles'

const CartIcon = () => {
    const {hideCartDropDown, total} = useContextValue()
    return (
        <CartContainer onClick={hideCartDropDown}>
            <ShoppingIcon/>
            <ItemCountContainer>{total}</ItemCountContainer>
        </CartContainer>
    )
}

export default CartIcon
