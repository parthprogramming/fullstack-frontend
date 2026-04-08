import { useEffect, useState } from "react";
import useStore from "../context/store";
import { Button, Card, Table } from 'react-bootstrap'

function Products() {
    const [message, setMessage] = useState('');
    const [sortByPrice, setSortByPrice] = useState('');
    const { products, setCart, addToCart, removeFromList, fetchProduct } = useStore();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastSlide = currentPage * itemsPerPage;
    const indexOfFirstSlide = indexOfLastSlide - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstSlide, indexOfLastSlide);

    const [productsList, setProductsList] = useState([]);
    const totalPages = Math.ceil(productsList.length / itemsPerPage);
    const [availableData, setavailableData] = useState([]);

    async function displayProductList() {
        const response = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/product');
        const data = await response.json();
        setProductsList(data);
    }

    useEffect(() => {
        displayProductList();
    })



    const deleteProduct = async (id) => {
        alert("Are You Sure You Want To Delete the Product " + id);
        const request = await fetch("https://fullstack-backend-production-2e4f.up.railway.app/api/product/:" + id, {
            method: 'DELETE'
        });
        const data = await request.json();
        setProductsList(data);
    }

    useEffect(() => {
        const res = fetchProduct();
    }, []);

    const handleSortByPrice = (e) => {
        const value = e.target.value;
        setSortByPrice(value);

        if (value === "Expensive") {
            setCart(prev => [...prev].sort((a, b) => b.price - a.price));
        }

        if (value === "Cheap") {
            setCart(prev => [...prev].sort((a, b) => a.price - b.price));
        }
    };

    return (
        <div>

            <Card>
                <Card.Header>
                    {message && <p>{message}</p>}
                    <h1>Product List</h1>
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
                            {productsList.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <Button className="btn-sm mx-1" variant="success" onClick={() => addToCart(product.id)}>
                                            Add to cart
                                        </Button>
                                        <Button className="btn-sm mx-1" variant="danger" onClick={() => deleteProduct(product.id)}>
                                            Delete from list
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <Button variant="secondary" className="btn-sm " onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>Prev</Button>
                        <p>Page {currentPage} of {totalPages} </p>
                        <Button variant="secondary" className="btn-sm" onClick={() => setCurrentPage(p => p + 1)} disabled={indexOfLastSlide >= products.length}>Next</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Products;
