import CartContext from "./CartContext";


const CartProvider = (props) => {

    const addItemToBucketHandler = (item) => {

    }

    const removeItemToBucketHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToBucketHandler,
        removeItem: removeItemToBucketHandler,
        message: 'Click here',
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;