import React from 'react'
import { useContextValue } from '../../context/shopContext'
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './CheckoutItemstyle'

const CheckOutItem = ({ crtItem }) => {
    const {addItem,removeItem,clearItem} = useContextValue()
    const { name, imageUrl, price, quantity } = crtItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(crtItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(crtItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(crtItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem
