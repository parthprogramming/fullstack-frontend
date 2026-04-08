import Login from "../../src/components/auth/login.jsx"
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom";

import { NotificationProvider } from '../context/notificationContext.jsx';
import { AuthProvider } from '../context/authContext.jsx';
import { ProductProvider } from '../context/productContext.jsx';
import { CartProvider } from '../context/cartContext.jsx';
import { UserProvider } from '../context/userContext.jsx';
import {StoreProvider} from '../context/store.jsx'


test("Login Pending Message", async () => {

    const {getByPlaceholderText} =  render(
        <NotificationProvider>
            <AuthProvider>
                <UserProvider>
                    <ProductProvider>
                        <CartProvider>
                            <StoreProvider>
                                <MemoryRouter>
                                <Login />
                                </MemoryRouter>
                            </StoreProvider>
                        </CartProvider>
                    </ProductProvider>
                </UserProvider>
            </AuthProvider>
        </NotificationProvider>
    )

    const Username = getByPlaceholderText("Enter Username")
    await userEvent.type(Username, "Parth")

    const Password = getByPlaceholderText("Enter Password")
    await userEvent.type(Password, "mypassword123")

    await userEvent.click(screen.getByRole("button"))


    const result = screen.getByText("Product List")
    expect(result).toBeInTheDocument()



})