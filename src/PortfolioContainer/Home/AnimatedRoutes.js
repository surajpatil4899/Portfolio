import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Home from "./Home";
import { Skills  } from "./Skills";
import Contact from "./Contact";
import About from "./About";
import { AnimatePresence } from "framer-motion";
import Projects from "./Projects";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
