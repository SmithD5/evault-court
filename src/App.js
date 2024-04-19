import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Signin from "./components/Signin.js";
import Register from "./components/Register.js";
import DashboardJudge from "./components/DashboardJudge.js";
import CaseFileJudge from "./components/CaseFileJudge.js";
import Queries from "./components/Queries.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route index path='/signin' element={<Signin />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/dashboard/judge' element={<DashboardJudge />} />
        <Route index path='/dashboard/judge/case-file/:id' element={<CaseFileJudge />} />
        <Route index path='/queries' element={<Queries />} />
      </Routes>
    </Router>
  );
}

export default App;
