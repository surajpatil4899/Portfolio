import React from 'react'
import Profile from './Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div
      className="home-container"
    >
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
