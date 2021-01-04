import React from 'react'
import { CartItemImage,CartItemContainer,ItemDetailsContainer } from './CartItemStyle'

const CartItem = ({item: {name, price, imageUrl,quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name}/>
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
            
        </CartItemContainer>
    )
}

export default CartItem