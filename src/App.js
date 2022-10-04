import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Support } from "./components/Support";
import { Nav } from "./components/Nav";
import { Greet } from "./components/Greet";
import { CustomerList } from "./components/CustomerList";
import { UserList } from "./components/UserList";
import { ProductList } from "./components/ProductList";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/cust" element={<CustomerList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Support />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
