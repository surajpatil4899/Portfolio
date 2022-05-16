import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Nav } from "react-bootstrap";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, trnasition: { duration: 2} }}
    >
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/surajpatil4899">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/surajpatil4899/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/suraj_patil__07/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009477112436">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Suraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    2500,
                    "Full Stack Developer 🖥️",
                    2000,
                    "Competitive Programmer 🎯",
                    1500,
                    "Sportaman 🏑⚽🏏🏐",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
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
    </motion.div>
  );
}
