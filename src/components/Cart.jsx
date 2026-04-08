import { useParams } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/cartContext";

const Cart = () => {

    const { name } = useParams();
    const { currentUser, cart, removeFromCart, clearCart } = useContext(AuthContext)
    // prefer currentUser from context, fallback to route param
    const username = currentUser || name || 'Guest'

    return (
        <div>
            {/* <h3>Welcome {username}</h3> */}
            <h4 style={{ textAlign: 'center' }}>Items in Cart</h4>
            {cart && cart.length > 0 ? (
                <>
                    <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>    
                                <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
                                <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => (
                                <tr key={idx}>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>${item.price}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>
                                        <button onClick={() => removeFromCart(idx)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>



                    </table>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <h3>Total: ${cart.reduce((s, item) => s + Number(item.price || 0), 0).toFixed(2)}</h3>
                        <button onClick={() => { clearCart(); alert('Checkout complete'); }} style={{ padding: '8px 16px', cursor: 'pointer' }}>Checkout</button>
                    </div>





                </>
            ) : (



                <h1>No items in cart.</h1>
            )}
        </div>
    )
}

export default Cart