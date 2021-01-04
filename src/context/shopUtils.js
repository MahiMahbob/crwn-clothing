export const addItemToCart = (cartItems,itemsToAdd) => {

    const ifCartItemExist = cartItems.find(cartItem => cartItem.id === itemsToAdd.id)

    if(ifCartItemExist){
        return cartItems.map(cartItem => cartItem.id === itemsToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...itemsToAdd, quantity: 1}]
}