import { useNavigate } from "react-router-dom";
import useAuth from "../../context/authContext";

const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            const res = logout();
            console.log(res)
            navigate('/login?message=Logout Successful');
        }
    }
    return (
        <button onClick={() => handleLogout()}>Logout</button>
    )
}

export default Logout;