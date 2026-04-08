
import { Link, useParams } from "react-router-dom";
import useCart from "../../context/cartContext";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const Cart = () => {
    const { cart, setCart } = useCart();
    // const [cartItems, setCartItems] = useState([]);
    // console.log('cart from cart page', cart);

    const nameParam = useParams();
    // console.log(nameParam);

    const handleDeleteFromCart = (id) => {
        console.log(id);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h1>Wellcome {nameParam.name}</h1>
                            <h1>Cart Items</h1>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <Button varient="danger" onClick={() => handleDeleteFromCart(product.id)}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <p>Total Price : ${cart.reduce((total, item) => total + item.price, 0)}</p>
                            {/* <Link to="/checkout">Checkout</Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;