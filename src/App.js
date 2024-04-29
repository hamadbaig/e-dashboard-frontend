import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Product listing component</h1>} />
          <Route path="/add" element={<h1>Add product component</h1>} />
          <Route path="/update" element={<h1>Update Product component</h1>} />
          <Route path="/delete" element={<h1>Delete Product component</h1>} />
          <Route path="/logout" element={<h1>Logout component</h1>} />
          <Route path="/profile" element={<h1>Profile component</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
