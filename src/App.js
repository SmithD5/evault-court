import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Signin from "./components/Signin.js";
import Register from "./components/Register.js";
import DashboardJudge from "./components/DashboardJudge.js";
import CaseFileJudge from "./components/CaseFileJudge.js";
import DashboardFileAccess from "./components/DashboardFileAccess.js";
import FileAccessJudgeAssign from "./components/FileAccessJudgeAssign.js";
import FileAccessQueries from "./components/FileAccessQueries .js";
import FileCheckQueries from "./components/FileCheckQueries .js";
import DashboardFileCheck from "./components/DashboardFileCheck.js";
import FileCheckUpdate from "./components/FileCheckUpdate.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route index path='/signin' element={<Signin />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/dashboard/judge' element={<DashboardJudge />} />
        <Route index path='/dashboard/judge/case-file/:id' element={<CaseFileJudge />} />
        <Route index path='/dashboard/file-access/main' element={<DashboardFileAccess />} />
        <Route index path='/dashboard/file-access/assigning' element={<FileAccessJudgeAssign />} />
        <Route index path='/dashboard/file-access/queries' element={<FileAccessQueries />} />
        <Route index path='/dashboard/file-check/main' element={<DashboardFileCheck />} />
        <Route index path='/dashboard/file-check/queries' element={<FileCheckQueries />} />
        <Route index path='/dashboard/file-check/update' element={<FileCheckUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
