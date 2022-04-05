import logo from "./logo.svg";
import "./App.css";
import { Login } from "./component/Login";
import { UserList } from "./component/UserList";
import { Signin } from "./component/Signin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login />
      <Signin />
      <Routes>
        <Route path="/userList" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
