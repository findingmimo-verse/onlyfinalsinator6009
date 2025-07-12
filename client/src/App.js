import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import CourseLogin from './pages/CourseLogin';
import Character from './pages/Character';
import Map from './pages/Map';
import GpaTracker from './pages/GpaTracker';
import Semester1 from './pages/Semester1';
import CourseAssignments from './pages/CourseAssignments';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/courselogin" element={<CourseLogin />} />
          <Route path="/character" element={<Character />} />
          <Route path="/map" element={<Map />} />
          <Route path="/gpa" element={<GpaTracker />} />
          <Route path="/semester1" element={<Semester1 />} />
          <Route path="/courseassignments" element={<CourseAssignments />} />
        </Routes>
    </Router>
  );
}

export default App;