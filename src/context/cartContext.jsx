import { createContext, useContext, useState } from "react";
import useProduct from "./productContext";
import useAuth from "./authContext";
import { useNotification } from "./notificationContext";


export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const { products } = useProduct();
    const { isLoggedIn } = useAuth();
    const { showNotification } = useNotification();

    const addToCart = (id) => {
        if (!isLoggedIn) {
            showNotification("Please login first !!");
            return "Please login first !!"
        } else {
            const product = products.find(p => p.id === id);
            if (product) {
                setCart(prevCart => [...prevCart, product]);
            }
            showNotification("Product added to cart");
            return "Product added to cart"
        }
    }

    const proceedToCheckout = () => {
        if (cart.length === 0) {
            showNotification("Cart is empty", "info");
            return
        }
        const confirm = window.confirm("Are you sure you want to checkout?");
        if (!confirm) {
            showNotification("Checkout cancelled", "info");
        }
        setCart([]);
        showNotification("proceed to checkout", "success");
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            cart,
            proceedToCheckout
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}

export default useCart