import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [company, setCompany] = useState("");
  let Id = JSON.parse(localStorage.getItem("user"));
  Id = Id._id;
  console.log("Hammad:", Id);

  const collectData = async () => {
    // console.warn("email:password", email, password);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, Id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
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
      <input
        className="input-box"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      <input
        className="input-box"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <input
        className="input-box"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company"
      />
      <button onClick={collectData} className="signup-button" type="button ">
        Submit
      </button>
    </div>
  );
};
export default AddProduct;
