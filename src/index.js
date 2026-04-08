import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './context/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationProvider } from './context/notificationContext';
import { AuthProvider } from './context/authContext';
import { ProductProvider } from './context/productContext';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <StoreProvider>
                <App />
              </StoreProvider>
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </AuthProvider>
    </NotificationProvider>
  /* </React.StrictMode> */
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
