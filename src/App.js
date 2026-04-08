import './App.css';
import Login from './components/auth/login';
import Products from './components/product/product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/landing/Home';
import Cart from './components/cart/Cart';
import Navbar from './components/landing/Navbar';
import Footer from './components/landing/Footer';
import AuthGuard from './guard/AuthGuard';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Error404 from './components/common/404Error';
import Checkout from './components/cart/Checkout';
import User from './components/user/User';
import AddProduct from './components/product/AddProduct';
import UnControlledComponent from './guard/UncontrolledComponents'
import AboutUs from './components/common/Aboutus';
import ProductDetails from './components/product/ProductDetail';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/class-component' element={<AboutUs title='welcome'/>}/>
          
          <Route path="/logout" element={<Logout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails/>}/>


          {/* Nested Routing */}
          <Route element={<AuthGuard/>}>
            <Route path='/cart' element={<Cart></Cart>} />
            <Route path='/checkout' element={<Checkout></Checkout>} />
          </Route>


            {/* Nested Routing */}
          <Route path='/user' element={<User></User>}>
          <Route path='/user/profile' element={<Profile></Profile>}/>
          </Route>


          <Route path='/add-product' element={
            // <AuthGuard>
              <AddProduct></AddProduct>
            // </AuthGuard>
          } />
          <Route path='*' element={<Error404 />}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
