import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h1>About Resunex</h1>

      <p>
        Resunex is an AI-powered resume screening system that helps recruiters
        filter and rank candidates automatically.<br></br><br></br>
        An Automated Resume Screening System helps recruiters automatically filter and rank resumes. Instead of manually reading hundreds of resumes, the system analyzes resumes using Natural Language Processing (NLP) and matches them with job descriptions.
      </p>

      <h3>Features:</h3>
      <ul>
        <li>AI Resume Matching</li>
        <li>Multiple Resume Upload</li>
        <li>Instant Ranking</li>
        <li>Smart Skill Detection</li>
      </ul>
    </div>
  );
}

export default About;