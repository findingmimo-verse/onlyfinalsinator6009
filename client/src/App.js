import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import CourseLogin from './pages/CourseLogin';
import Character from './pages/Character';
import Map from './pages/Map';
import GpaTracker from './pages/GpaTracker';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/courselogin" element={<CourseLogin />} />
          <Route path="/character" element={<Character />} />
          <Route path="/map" element={<Map />} />
          <Route path="/gpa" element={<GpaTracker />} />
        </Routes>
    </Router>
  );
}

export default App;