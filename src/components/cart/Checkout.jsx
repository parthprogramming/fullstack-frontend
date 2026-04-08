import { Button, Card } from "react-bootstrap"
import useCart from "../../context/cartContext";

const Checkout = () => {
    const { proceedToCheckout, cart } = useCart();
    return (
        <>
            <Card>
                <Card.Header>
                    <h1>Checkout all Products</h1>
                </Card.Header>
                <Card.Body>
                    <h2>Total Products: {cart.length}</h2>
                    <p>Total Price : ${cart.reduce((total, item) => total + item.price, 0)}</p>
                    <Button onClick={proceedToCheckout}>Checkout</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Checkout