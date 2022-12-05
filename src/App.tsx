import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Customers from './page/customers/Customers';
import Dashboard from './page/dashboard/Dashboard';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/customers" element={ <Customers /> } />
          {/* <Route path="/register" element={ <RegisterPage /> } /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
