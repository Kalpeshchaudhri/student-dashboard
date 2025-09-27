import React, { Component } from "react";

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: "📢 Mid-term exams will start from 15th October!"
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="alert alert-info text-center" role="alert">
          {this.state.announcement}
        </div>
      </div>
    );
  }
}

export default Announcement;
