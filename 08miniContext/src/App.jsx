import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>React</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
