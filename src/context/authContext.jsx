import { createContext, useContext, useEffect, useState } from "react";
import { useNotification } from "./notificationContext";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [autheticatedUser, setAutheticatedUser] = useState(null);
    const [userRole, setUserRole] = useState('');
    const isLoggedIn = !!autheticatedUser;
    const { showNotification } = useNotification();

    const register = async (username, password) => {
        if (!username || !password) {
            showNotification("Username and password required", "error");
            return false;
        }

        try {
            const response = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            let data;
            try {
                data = await response.json();
            } catch {
                data = { message: "Unexpected server response" };
            }

            if (response.ok) {
                showNotification(data.message || "Registered successfully", "success");
                return true;
            } else {
                showNotification(data.message || "Registration failed", "error");
                return false;
            }

        } catch (err) {
            console.error("Register error:", err);
            showNotification("Cannot connect to server", "error");
            return false;
        }
        
    };

    const login = async (username, password) => {
        try {
            const response = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                setUserRole(data.role);
                setAutheticatedUser({ name: data.username, role: data.role });
                showNotification("Login successful", "success");
                return true;
            } else {
                showNotification(data.message, "error");
                return false;
            }

        } catch (err) {
            showNotification("Server error", "error");
            return false;
        }
    };

    const logout = () => {
        setAutheticatedUser(null);
        showNotification("Logged out", "info");
    };

    return (
        <AuthContext.Provider
            value={{
                autheticatedUser,
                isLoggedIn,
                login,
                logout,
                register,
                userRole
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);



    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};

export default useAuth;
