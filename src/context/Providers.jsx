import { AuthProvider } from "./authContext"
import { CartProvider } from "./cartContext"
import { NotificationProvider } from "./notificationContext"
import { ProductProvider } from "./productContext"

const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <NotificationProvider>
                <ProductProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </ProductProvider>
            </NotificationProvider>
        </AuthProvider>
    )
};

export default Providers;