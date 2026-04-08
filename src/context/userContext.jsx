import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/user/users');
                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchUsers();
    },[])

    return (
        <UserContext.Provider value={{
            users,
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within an UserProvider");
    }

    return context;
}

export default useUser;