import React from "react";
import emailjs from "emailjs-com";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Nav } from "react-bootstrap";

const Contact = () => {
    // const navigate = useNavigate();
  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f8u6v48",
        "template_wn1sihr",
        e.target,
        "gjdHGeZiCLuUo4VGd"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <motion.div
      className="home-container"
      style={{ position: "relative" }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, trnasition: { duration: 2} }}
    >
      <Navbar />
      {/* <button
        className="btn btn-secondary"
        onClick={() => navigate("/")}
        style={{
          marginTop: "15px",
          marginLeft: "15px",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        Back
      </button> */}
      <div
        className="container border"
        style={{
          marginTop: "10px",
          width: "50%",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{ marginTop: "25px", fontSize: "45px" }}
          className="col-sm-6 offset-sm-3"
        >
          Contact Me
        </h1>
        <form
          className="row"
          onSubmit={sentEmail}
          style={{ margin: "25px 85px 50px 100px" }}
        >
          <label>Name</label>
          <input type="text" name="name" className="form-control" />
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
          <label>Message</label>
          <textarea name="message" rows="4" className="form-control" />
          <input
            type="submit"
            style={{ marginTop: "30px", padding: "5px" }}
            value="Send"
            className="form-control btn btn-primary col-sm-4 offset-sm-4"
          />
        </form>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
