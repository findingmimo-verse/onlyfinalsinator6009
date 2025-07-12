
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Semester1() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: '', code: '', credits: '', grade: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCourse = () => {
    if (form.name && form.code && form.credits && form.grade) {
      setCourses([...courses, form]);
      setForm({ name: '', code: '', credits: '', grade: '' });
    }
  };

  return (
    <div className="semester-container">
      <h2>Semester 1 Courses</h2>
      <div className="course-form">
        <input name="name" placeholder="Course Name" value={form.name} onChange={handleChange} />
        <input name="code" placeholder="Course Code" value={form.code} onChange={handleChange} />
        <input name="credits" type="number" placeholder="Credits" value={form.credits} onChange={handleChange} />
        <input name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} />
        <button onClick={handleAddCourse}>+</button>
      </div>

      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={index} onClick={() => navigate(`/semester1/course/${index}`, { state: { course } })}>
            {course.name} ({course.code}) - {course.credits} credits
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Semester1;
