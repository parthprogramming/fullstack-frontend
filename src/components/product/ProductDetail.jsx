import { useLocation } from "react-router-dom";

const ProductDetails = () => {

  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h2>No Product Selected</h2>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>

    </div>
  );
};

export default ProductDetails;