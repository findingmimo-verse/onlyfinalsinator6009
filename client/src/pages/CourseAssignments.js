
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function CourseAssignments() {
  const location = useLocation();
  const course = location.state?.course || {};
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState({ type: '', date: '', marks: '' });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const addAssignment = () => {
    if (assignment.type && assignment.date && assignment.marks) {
      setAssignments([...assignments, assignment]);
      setAssignment({ type: '', date: '', marks: '' });
    }
  };

  return (
    <div className="assignment-container">
      <h2>{course.name} Assignments</h2>
      <div className="assignment-form">
        <select name="type" value={assignment.type} onChange={handleChange}>
          <option value="">Type</option>
          <option value="daily">Daily</option>
          <option value="project">Project</option>
          <option value="lab">Lab Work</option>
          <option value="midsem">Mid Sem</option>
          <option value="endsem">End Sem</option>
          <option value="quiz">Quiz</option>
          <option value="other">Other</option>
        </select>
        <input name="date" type="date" value={assignment.date} onChange={handleChange} />
        <input name="marks" type="number" placeholder="Marks" value={assignment.marks} onChange={handleChange} />
        <button onClick={addAssignment}>+</button>
      </div>

      <ul className="assignment-list">
        {assignments.map((a, idx) => (
          <li key={idx}>{a.type} - {a.date} - {a.marks} marks</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseAssignments;
