import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectdata = async () => {
    console.warn("name:email:password", Name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ Name, email, password }),
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.result));
      localStorage.setItem("auth", JSON.stringify(result.auth));

      navigate("/");
    }
  };
  return (
    <div className="signup-main">
      <h1>Register</h1>
      <input
        className="input-box"
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="input-box"
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="input-box"
        type="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectdata} className="signup-button" type="button ">
        Submit
      </button>
    </div>
  );
};
export default Signup;
