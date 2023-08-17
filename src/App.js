import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navigation from "./components/navigation";

import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ProductDetail from "./pages/product/product-detail";
import Footer from "./components/footer";

import { ShopContextProvider } from "./context/shop-context";
import {useRef} from "react";
import {categories} from "./DATA/data";


function App() {

    const categoryRef = useRef([]);

    const handleCategoryClick = (category) => {

        categoryRef.current[category]?.scrollIntoView({behavior: 'smooth'});
        categoryRef.current[category]?.click()
    };

  return (
      <div id="shop">
          <ShopContextProvider>
          <Router>
              <Navigation handleCategoryClick={handleCategoryClick}/>
              <Routes>
                <Route path="/" element={<Shop categoryRef={categoryRef} handleCategoryClick={handleCategoryClick} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:productId" element={<ProductDetail/>} />
              </Routes>
              <Footer/>
          </Router>
          </ShopContextProvider>
      </div>
  );
}

export default App;
