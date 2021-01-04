import React from 'react'
import { CartDropDwn,CartItems,CartDropdownButton } from './CartDrpDwnStyles'

const CartDropdown = () => {
    return (
        <CartDropDwn>
            <CartItems />
           <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton> 
        </CartDropDwn>
    )
}

export default CartDropdown
