import React from 'react'
import { useContextValue } from '../../context/shopContext'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyles'

const CartIcon = () => {
    const {hideCartDropDown} = useContextValue()
    return (
        <CartContainer onClick={hideCartDropDown}>
            <ShoppingIcon/>
            <ItemCountContainer>0</ItemCountContainer>
        </CartContainer>
    )
}

export default CartIcon
