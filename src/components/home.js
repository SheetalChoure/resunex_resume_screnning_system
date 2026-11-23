import React from "react";
import "./home.css";
import {useNavigate} from 'react-router-dom';


function Home() {

const navigate = useNavigate();

  const openupload = () => {
    navigate('/upload');
  };


  return (
    <div className="home">
      
      {/* Hero Section */}
      <div className="hero">
        
        <h1>AI-powered Resume Screening System</h1>
        <h2>Smarter Hiring Starts Here</h2>
        <p>Save 80% of screening time with Resunex's AI-powered resume screening and candidate scoring. Make smarter hiring decisions with intelligent matching technology that identifies the best-fit candidates instantly.</p>
        <button className="btn" onClick={openupload}>Get Started</button>
        
      </div>

      <div className="para">
        
      </div>

        <div className="para1">
            <h2>How Resunex Works</h2>
            <p>Transform your hiring process in just three simple steps</p>
        </div>

      {/* Features Section */}
      <div className="features">

        <div className="card">
          <h3>Upload Resume</h3>
          <p>Upload multiple resumes easily in seconds.</p>
        </div>

        <div className="card">
          <h3>Smart Matching</h3>
          <p>AI compares resumes with job description.</p>
        </div>

        <div className="card">
          <h3>Instant Results</h3>
          <p>Get ranked candidates instantly.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2026 Resunex | AI Resume Screening </p>
        <p>Privecy Policy  | Terms of Service</p>
      </div>

    </div>
  );
}

export default Home;