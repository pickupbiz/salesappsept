import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Support } from "./components/Support";
import { Nav } from "./components/Nav";
import { Greet } from "./components/Greet";
import { CustomerList } from "./components/CustomerList";
import { UserList } from "./components/UserList";
import { ProductList } from "./components/ProductList";
import { AllUserList } from "./components/AllUserList";
import { DeviceList } from "./components/DeviceList";
import { StudentList } from "./components/StudentList";
import { EmpList } from "./components/EmpList";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/emp" element={<EmpList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/cust" element={<CustomerList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alluser" element={<AllUserList />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/help" element={<Support />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
