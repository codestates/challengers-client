
import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './component/login.js';
// // import { Link } from 'react-router-dom';
// // import styled from 'styled-components';
// // import Signup from './component/signup.js';
// ###REASON : 다른 페이지를 같은 페이지로 시작점을 잡았기에 conflict발생. 

// function App() {
//     return (
//       <div className="App">
//         <Login />
//         {/* <Signup /> */}
//       </div>
//     );

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

// Home Component Routing !!!

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );

}

export default App;

  