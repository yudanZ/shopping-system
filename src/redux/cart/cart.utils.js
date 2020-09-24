export const addItemToCart = ( cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if( existingCartItem) {
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem
            )
    }

    return [ ...cartItems,  {...cartItemToAdd, quantity: 1}];
}

//delete cartItem from state
export const removeItemFromCart = ( cartItems, cartItemtoRemove) => {
   
    return cartItems.filter( cartItem =>
        cartItem.id !== cartItemtoRemove.id
    )
    
}


//check quantity of cartItem, if ==1, then delete from state, otherwise, reduce quantity
export const removeItem = ( cartItems, cartItemtoRemove ) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === cartItemtoRemove.id
    );

    if( existingCartItem.quantity === 1){
        return cartItems.filter( cartItem =>
            cartItem.id !== cartItemtoRemove.id
        )
    }
    return cartItems.map( cartItem =>
        cartItem.id === cartItemtoRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity -1 } 
            : cartItem
    );
    
}