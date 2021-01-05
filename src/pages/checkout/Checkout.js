import React from 'react'
import CheckOutItem from '../../components/checkout-item/CheckOutItem'
import { useContextValue } from '../../context/shopContext'
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer } from './CheckoutStyle'

const Checkout = () => {
    const {total,cartItem} = useContextValue()
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItem.map((crtItem) => <CheckOutItem key={crtItem.id} crtItem={crtItem} />)
            }
            <TotalContainer>TOTAL: ${total}</TotalContainer>
        </CheckoutPageContainer>
    )
}

export default Checkout
