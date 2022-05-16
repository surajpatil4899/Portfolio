import React from 'react'
import './About.css'
import Footer from './Footer/Footer';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

export default function About() {
      const navigate = useNavigate();
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, trnasition: {duration: 2}}}
    >
      <Navbar />
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text"> About Me :</span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <span className="profile-role-tagline">
                  Enthusiastic engineering graduate with basic knowledge in
                  coding
                  <br />
                  and design. Proficient in C++ (DSA and Problem Solving),
                  <br />
                  HTML 5, JavaScript, and Python.
                  <br />
                  Ability to learn new softwares and technologies quickly.
                  <br />
                  Capability to work in teams by providing valuable support.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/contact")}
              >
                Hire Me
              </button>
              <a href="Suraj_Patil.pdf" download="Suraj Suraj_Patil.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
