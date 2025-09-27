import React from "react";

const StudentCard = ({ name, rollNo, course, batch }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Roll No:</strong> {rollNo}</p>
        <p className="card-text"><strong>Course:</strong> {course}</p>
        <p className="card-text"><strong>Batch:</strong> {batch}</p>
      </div>
    </div>
  );
};

export default StudentCard;
