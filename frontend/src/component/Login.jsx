import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => navigate("/userlist", { state: "loggedin" }));
  };
  const handleChange = (e) => {
    let { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </React.Fragment>
  );
};
