import LoginHome from "./Components/LoginForm/LoginHome";
import React from 'react';
import Layout from "./Components/MainPage/Layout";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      {
        localStorage.getItem("user")==undefined ? <LoginHome/> : <span><Navbar/> <Layout/></span>
      }
    </div>
  );
}

export default App;
