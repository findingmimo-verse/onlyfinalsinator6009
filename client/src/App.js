import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your page components
import Login from './pages/Login';
import Character from './pages/Character';
import CourseLogin from './pages/CourseLogin';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/courselogin">Course Login</a></li>
            <li><a href="/character">Character</a></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/courselogin" element={<CourseLogin />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;