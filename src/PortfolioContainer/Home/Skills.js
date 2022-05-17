import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import SkillBar from "react-skillbars";

export const Skills = () => {
  const skills = [
    {
      type: "C++",
      level: 90,
      color: {
        bar: "#3498db",
        title: { background: "#2980b9" },
      },
    },
    {
      type: "React",
      level: 50,
      color: {
        bar: "#3498db",
        title: { background: "#2980b9" },
      },
    },
    {
      type: "Javascript",
      level: 40,
      color: {
        bar: "#3498db",
        title: { background: "#2980b9" },
      },
    },
    {
      type: "HTML",
      level: 20,
      color: {
        bar: "#3498db",
        title: { background: "#2980b9" },
      },
    },
    {
      type: "Photoshop",
      level: 90,
      color: {
        bar: "#3498db",
        title: { background: "#2980b9" },
      },
    },
  ];

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, trnasition: { duration: 2 } }}
    >
      <Navbar />
      <div className="profile-details-name">
        <span
          className="primary-text"
          style={{ color: "white", marginLeft: "45%" }}
        >
          {" "}
          Skills :
        </span>
      </div>
      <SkillBar skills={skills} animationDuration={5000} offset={`25px`} />
      <Footer />
    </motion.div>
  );
};
