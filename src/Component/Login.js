import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
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
    // console.warn("email:password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.Name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };
  return (
    <div className="signup-main">
      <h1>Login</h1>
      {/* <input
        className="input-box"
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      /> */}
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
export default Login;
