import { Link } from 'react-router-dom';
import '../../assets/style.css';
import cartIcon from '../../assets/cart icon.jpg'
import useAuth from '../../context/authContext';
import useCart from '../../context/cartContext';

const Navbar = () => {
    const { isLoggedIn, autheticatedUser } = useAuth();
    const {cart} = useCart();

    return (
        <nav className="Navbar">
            <h1>My Store</h1>
            <h2>Wellcome {autheticatedUser?.name || 'Guest'}</h2>
            <li>
                <Link to='/' >Home</Link>
                <Link to='/products'>Products</Link>
                {!isLoggedIn && <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>}
                {isLoggedIn && <>
                    <Link to='/cart'><img src={cartIcon} alt='Cart'width={25} height={25} style={{background:'transperant'}}/> {cart.length > 0 && <>{cart.length}</>}</Link>
                    <Link to='/checkout'>Checkout</Link>
                    <Link to='/user'>User</Link>
                    <Link to='/logout'>Logout</Link>
                </>}
            </li>
        </nav>
    )
}

export default Navbar;