import { createContext, useContext, useEffect, useState } from "react";
import { deleteProductApi, fetchProductsApi } from "../api/products.api";
import useAuth from "./authContext";
import { useNotification } from "./notificationContext";


export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
        // { id: 1, name: "Laptop Pro 15", price: 1200 },
        // { id: 2, name: "Laptop Air 13", price: 900 },
        // { id: 3, name: "Gaming Laptop X", price: 1500 },
        // { id: 4, name: "Wireless Mouse", price: 40 },
        // { id: 5, name: "Mechanical Keyboard", price: 120 },
        // { id: 6, name: "USB-C Hub", price: 60 },
        // { id: 7, name: "4K Monitor", price: 400 },
        // { id: 8, name: "27-inch Monitor", price: 250 },
        // { id: 9, name: "Noise Cancelling Headphones", price: 300 },
        // { id: 10, name: "Bluetooth Speaker", price: 150 },

        // { id: 11, name: "Smartphone X", price: 999 },
        // { id: 12, name: "Smartphone Lite", price: 499 },
        // { id: 13, name: "Tablet Pro", price: 800 },
        // { id: 14, name: "Tablet Mini", price: 400 },
        // { id: 15, name: "Smart Watch", price: 250 },
        // { id: 16, name: "Fitness Tracker", price: 120 },
        // { id: 17, name: "External SSD 1TB", price: 180 },
        // { id: 18, name: "External HDD 2TB", price: 100 },
        // { id: 19, name: "Webcam HD", price: 70 },
        // { id: 20, name: "Microphone Pro", price: 200 },

        // { id: 21, name: "Office Chair", price: 300 },
        // { id: 22, name: "Standing Desk", price: 600 },
        // { id: 23, name: "Desk Lamp", price: 50 },
        // { id: 24, name: "Router AX", price: 180 },
        // { id: 25, name: "WiFi Extender", price: 90 },
        // { id: 26, name: "Graphics Card RTX", price: 1200 },
        // { id: 27, name: "Power Supply 750W", price: 130 },
        // { id: 28, name: "PC Case RGB", price: 150 },
        // { id: 29, name: "Motherboard Pro", price: 350 },
        // { id: 30, name: "RAM 16GB", price: 90 },

        // { id: 31, name: "RAM 32GB", price: 160 },
        // { id: 32, name: "Processor i7", price: 400 },
        // { id: 33, name: "Processor i9", price: 600 },
        // { id: 34, name: "Cooling Fan", price: 45 },
        // { id: 35, name: "Liquid Cooler", price: 180 },
        // { id: 36, name: "Gaming Chair", price: 350 },
        // { id: 37, name: "VR Headset", price: 500 },
        // { id: 38, name: "Drone Camera", price: 700 },
        // { id: 39, name: "Action Camera", price: 250 },
        // { id: 40, name: "Portable Charger", price: 60 },

        // { id: 41, name: "Smart Home Hub", price: 130 },
        // { id: 42, name: "Security Camera", price: 220 },
        // { id: 43, name: "Smart Bulb Pack", price: 80 },
        // { id: 44, name: "Smart Door Lock", price: 300 },
        // { id: 45, name: "Projector HD", price: 550 },
        // { id: 46, name: "TV 55-inch", price: 900 },
        // { id: 47, name: "TV 65-inch", price: 1300 },
        // { id: 48, name: "Soundbar", price: 250 },
        // { id: 49, name: "NAS Storage", price: 750 },
        // { id: 50, name: "Server Rack", price: 1000 }
    ]);
    const [filteredProducts, setFilteredProducts] = useState([...products]);
    const { isLoggedIn } = useAuth();
    const { showNotification } = useNotification();

    const fetchProduct = async () => {
        try {
            const res = await fetchProductsApi();
            const data = await res.json();
            setProducts(data);
            setFilteredProducts(data);
            // console.log(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, []);

    const addProduct = async (name, price) => {
        try {
            if (!isLoggedIn) {
                return "Please login first !!"
            }
            const res = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price })
            });
            // console.log(res);
            const data = await res.json();
            // console.log(data);
            showNotification("Product added successfully", "success");
            fetchProduct();
        } catch (err) {
            console.log(err)
        }
    }

    const deleteProduct = async (id) => {
        try {
            if (!isLoggedIn) {
                return "Please login first !!"
            }
            console.log(id)
            const res = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/product' + id, { method: 'DELETE' });
            const data = await res.json();
            showNotification("Product deleted successfully", "success");
            fetchProduct();
        } catch (err) {
            console.log(err)
        }
    }

    const handleProductFilter = (criteria) => {
        let sorted = [...products];

        if (criteria === "Cheaper") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (criteria === "Expensive") {
            sorted.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(sorted);
    };

    return (
        <ProductContext.Provider value={{
            products,
            handleProductFilter,
            filteredProducts,
            deleteProduct,
            addProduct,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }

    return context;
}

export default useProduct