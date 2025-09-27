import React, { Component } from "react";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "John Doe", rollNo: "101", course: "ReactJS", batch: "2025" },
        { name: "Jane Smith", rollNo: "102", course: "NodeJS", batch: "2025" },
        { name: "Mike Johnson", rollNo: "103", course: "MongoDB", batch: "2025" },
        { name: "Emily Davis", rollNo: "104", course: "ExpressJS", batch: "2025" }
      ]
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.students.map((student, index) => (
            <div className="col-md-6" key={index}>
              <StudentCard
                name={student.name}
                rollNo={student.rollNo}
                course={student.course}
                batch={student.batch}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
