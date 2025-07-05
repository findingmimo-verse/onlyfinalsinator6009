import React from 'react';

function getGradePoints(grade) {
  const gradeMap = {
    'A': 10, 'A-': 9, 'B': 8, 'B-': 7,
    'C': 6, 'C-': 5, 'D': 4, 'E': 2, 'F': 0
  };
  return gradeMap[grade.toUpperCase()] ?? -1;
}

function GpaTracker() {
  const calculateCGPA = () => {
    const numCourses = parseInt(prompt("Enter the number of courses:"));
    let totalCredits = 0;
    let totalWeightedGrade = 0;

    for (let i = 0; i < numCourses; i++) {
      const courseName = prompt(`Enter name of course ${i + 1}:`);
      const credits = parseFloat(prompt(`Enter credits for ${courseName}:`));
      const grade = prompt(`Enter grade obtained in ${courseName} (A, A-, B, etc):`);
      const gradePoints = getGradePoints(grade);

      if (gradePoints === -1) {
        alert("Invalid grade entered. Please reload and try again.");
        return;
      }

      totalCredits += credits;
      totalWeightedGrade += (gradePoints * credits);
    }

    const cgpa = totalWeightedGrade / totalCredits;
    alert(`Your CGPA is: ${cgpa.toFixed(2)}`);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>GPA Tracker</h1>
      <button onClick={calculateCGPA} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Calculate CGPA
      </button>
    </div>
  );
}

export default GpaTracker;
