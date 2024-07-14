import React from "react";
import "./AboutPage.css";

function Team() {
  return (
    <>
      <div className="team">
        <h2 className="heading" style={{ justifySelf: "center" }}>
          Meet Our Team
        </h2>
        <div className="team-member">
          <img
            src={`${process.env.PUBLIC_URL}/images/head_1.jpg`}
            alt="Member 1"
          />
          <div className="member-info">
            <p>John Doe - Chief Instructor</p>
          </div>
        </div>
        <div className="team-member">
          <img
            src={`${process.env.PUBLIC_URL}/images/head_2.jpg`}
            alt="Member 2"
          />
          <div className="member-info">
            <p>Jane Smith - Training Coordinator</p>
          </div>
        </div>
        <div className="team-member">
          <img
            src={`${process.env.PUBLIC_URL}/images/head_3.jpg`}
            alt="Member 3"
          />
          <div className="member-info">
            <p>Emily Johnson - Safety Officer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
