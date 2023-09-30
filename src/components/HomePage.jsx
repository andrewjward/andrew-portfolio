import React from 'react';
import { motion } from "framer-motion"
import andrew from "../assets/andrew.jpeg"

function Profile() {
  return (
    <div id="intro">
      <img src={andrew} alt="andrew" />
      <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>Hello, World!</motion.h1>
    </div>
  );
}

export default Profile;
