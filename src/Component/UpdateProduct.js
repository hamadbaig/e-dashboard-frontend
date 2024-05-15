import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  //   const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    console.log("hammad", params);

    let result = await fetch(`http://localhost:5000/update/${params.id}`);
    result = await result.json();
    setCategory(result.category);
    setCompany(result.company);
    setName(result.name);
    setPrice(result.price);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.log(result);
    alert("Product Updated Successfully");
    setCategory("");
    setCompany("");
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Update products</h1>
      <input
        className="input-box"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      {/* {error && !name && <span className="error-msg">Enter valid name</span>} */}
      <input
        className="input-box"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      {/* {error && !price && <span className="error-msg">Enter valid name</span>} */}

      <input
        className="input-box"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      {/* {error && !category && (
        <span className="error-msg">Enter valid name</span>
      )} */}

      <input
        className="input-box"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company"
      />
      {/* {error && !company && <span className="error-msg">Enter valid name</span>} */}

      <button onClick={updateProduct} className="signup-button" type="button ">
        Update
      </button>
    </div>
  );
};
export default UpdateProduct;
