import { useEffect, useState } from "react";
import { Button, Card, Table } from 'react-bootstrap'
import ProductFilter from "./ProductFilter";
import Pagination from "../common/Pagination";
import useProduct from "../../context/productContext";
import useCart from "../../context/cartContext";
import useAuth from "../../context/authContext";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";

function Products() {
    const { handleProductFilter, filteredProducts, deleteProduct } = useProduct();
    const { addToCart } = useCart();
    const { isLoggedIn, userRole } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [productsList, setProductsList] = useState([]);
    const indexOfLastSlide = currentPage * itemsPerPage;
    const indexOfFirstSlide = indexOfLastSlide - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstSlide, indexOfLastSlide);

    const navigate = useNavigate();

    const displayProductList = async () => {
        const response = await fetch('https://fullstack-backend-production-2e4f.up.railway.app/api/product');
        const data = await response.json();
        setProductsList(data);
    }
//https://fullstack-backend-production-2e4f.up.railway.app/api/product/downloadFile
    useEffect(() => {
        displayProductList();
    },[isLoggedIn])

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredProducts]);

    const downloadProductsList = async () => {
        console.log("sdsjnbisujdfjk")
        const response  = await fetch("https://fullstack-backend-production-2e4f.up.railway.app/api/product/downloadFile",{
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(productsList)
        })
        const result = await response.blob()
        const dataurl = window.URL.createObjectURL(result)
        const  a = document.createElement('a')
        a.href = dataurl;
        a.download = 'sample.pdf'
        a.click()
     

        console.log(">>>>>>>>>>>>>>>>>>>Products Data Sent<<<<<<<<<<<<<<<<<",result)
    }

   

    return (
        <div>
            <Card>
                <Card.Header className="d-flex">
                    <h1>Product List</h1>
                    {userRole === "admin" && (
                        <AddProduct />
                    )}
                </Card.Header>
                <Card.Body>
                    <ProductFilter type={handleProductFilter}></ProductFilter>
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
                                        <Button className="btn-sm mx-1" variant="success" disabled={!isLoggedIn} onClick={() => { addToCart(product.id) }}>
                                            Add to cart
                                        </Button>
                                        {userRole === "admin" &&
                                            <Button className="btn-sm mx-1" variant="danger" disabled={!isLoggedIn} onClick={() => { deleteProduct(product.id) }}>
                                                Delete from list
                                            </Button>
                                        }
                                        <Button className="btn-sm mx-1" disabled={!isLoggedIn} onClick={() => navigate("/product-details", { state: { product } })}>
                                                Show Details
                                            </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} List={filteredProducts} itemsPerPage={itemsPerPage}></Pagination>
                </Card.Body>
            </Card>
            <button onClick={downloadProductsList}>Download List of Products</button>
        </div>
    );
}

export default Products;
