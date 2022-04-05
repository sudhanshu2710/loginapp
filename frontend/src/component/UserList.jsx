import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./UserList.module.css";

export const UserList = () => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const loggedin = location.state;
  console.log(loggedin);
  if (!loggedin) navigate("/");

  const fun = (ar) => {
    console.log(ar);
    let newArr = ar.map((e) => e.name);
    console.log(newArr);
    setArr([...newArr]);
    setData([...newArr]);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/user")
      .then((res) => res.json())
      .then((array) => {
        fun(array.data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    let { name, value } = e.currentTarget;
    let newArray = arr.filter((ele) => ele.indexOf(value) != -1);
    setData([...newArray]);
  };
  console.log(arr);
  return (
    <React.Fragment>
      <h1>UserList</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </form>
      <div className={styles.result}>
        {data.map((ele) => (
          <h2>{ele}</h2>
        ))}
      </div>
    </React.Fragment>
  );
};
