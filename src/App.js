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

import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
      <div id="shop">
          <ShopContextProvider>
          <Router>
              <Navigation/>
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
          </Router>
          </ShopContextProvider>
      </div>
  );
}

export default App;
