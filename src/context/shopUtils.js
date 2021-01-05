export const addItemToCart = (cartItems, itemsToAdd) => {
    const ifCartItemExist = cartItems.find(cartItem => cartItem.id === itemsToAdd.id)
    if (ifCartItemExist) {
        return cartItems.map(cartItem => cartItem.id === itemsToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...itemsToAdd, quantity: 1 }]
}

export const ItemRemovesFromCart = (cartItem, itemsToRemove) => {
    const existingCartItem = cartItem.find(crtItem => crtItem.id === itemsToRemove.id)
    if (existingCartItem.quantity === 1) {
        return cartItem.filter(crtItem => crtItem.id !== itemsToRemove.id)
    }
    return cartItem.map(crtItem => crtItem.id === itemsToRemove.id ?
        { ...crtItem, quantity: crtItem.quantity - 1 } : crtItem
    )
}