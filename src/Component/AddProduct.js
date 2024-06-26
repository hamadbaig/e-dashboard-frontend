import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  let Id = JSON.parse(localStorage.getItem("user"));
  Id = Id._id;

  const collectData = async () => {
    // console.warn("email:password", email, password);
    if (!name || !price || !company || !category) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, Id }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.log(result);
    alert("product added successfully");
    setCategory("");
    setCompany("");
    setName("");
    setPrice("");
  };
  return (
    <div>
      <h1>Add products</h1>
      <input
        className="input-box"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      {error && !name && <span className="error-msg">Enter valid name</span>}
      <input
        className="input-box"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      {error && !price && <span className="error-msg">Enter valid name</span>}

      <input
        className="input-box"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      {error && !category && (
        <span className="error-msg">Enter valid name</span>
      )}

      <input
        className="input-box"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company"
      />
      {error && !company && <span className="error-msg">Enter valid name</span>}

      <button onClick={collectData} className="signup-button" type="button ">
        Add product
      </button>
    </div>
  );
};
export default AddProduct;
