import React from 'react';
import './App.css';
// import Login from './component/login';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
// // import styled from 'styled-components';
// // import Signup from './component/signup';
// ###REASON : 다른 페이지를 같은 페이지로 시작점을 잡았기에 conflict발생. 


// Home Component Routing !!!

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );

}

export default App;

  