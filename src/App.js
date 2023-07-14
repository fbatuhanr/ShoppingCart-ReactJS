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

function App() {
  return (
      <Router>
        <div>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
