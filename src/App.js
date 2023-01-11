import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from './components/Orders/Orders';
import React, { useEffect } from 'react';
import Address from './components/Address/Address';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  useEffect(() => {
    document.title = "upGrad E-Shop | Top brands for Phones and Electronics"
  }, []);

  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path='/' element={<Login />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>
        <Route path='/home' element={<Home />}>
        </Route>
        <Route path='/addproduct' element={<AddProduct />}>
        </Route>
        <Route path='/products/:id' element={<ProductDetails />}>
        </Route>
        <Route path='/address' element={<Address />}>
        </Route>
        <Route path='/orders' element={<Orders />}>
        </Route>        
      </Routes>
    </Router>
    
  );
}

export default App;
