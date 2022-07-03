import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://play-lh.googleusercontent.com/eoEJp3upoQ5fkWTLKjW5e5MJGlr5VhBDCZ0tIY7ynLsIUFVojHuRT3N5hu963j1kEVc"
            alt="No Internet Connection"
          />
        </div>
        <div className="card-content">
          <div className="card-tile">
            <h3>Projects</h3>
          </div>
          <div className="card-body">
            <p>
              Enthusiastic engineering graduate with basic knowledge in coding and design. Proficient in C++ (DSA and Problem Solving), HTML 5,
              JavaScript, and ReactJs.
            </p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a>Source Code</a>
          </button>
        </div>
      </div>
    );
}
