
import React, { useState } from 'react';
import './CourseLogin.css';

const CourseLogin = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, year, course };
    console.log('Course Login Data:', userData);
    if (onSubmit) onSubmit(userData);
  };

  return (
    <div className="course-login-container">
      <form className="course-login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Year Of Graduation</label>
        <input
          type="text"
          placeholder="Enter your year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <label>Course</label>
        <input
          type="text"
          placeholder="Enter your course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CourseLogin;
