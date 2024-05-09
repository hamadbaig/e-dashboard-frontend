import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import AddProduct from "./Component/AddProduct";
import PrivateComponent from "./Component/PrivateComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product listing component</h1>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1>Update Product component</h1>} />
            <Route path="/delete" element={<h1>Delete Product component</h1>} />
            <Route path="/logout" element={<h1>Logout component</h1>} />
            <Route path="/profile" element={<h1>Profile component</h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
