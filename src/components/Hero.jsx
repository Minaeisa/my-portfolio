import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6">
      <motion.img
        src={"/profile.PNG"}
        alt="Mina Eisa"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-48 h-48 object-cover rounded-full shadow-lg mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center"
      >
        Hello, I'm Mina
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-xl text-gray-600 mt-4 text-center"
      >
        Frontend Developer | React.js | Tailwind CSS | JavaScript | Responsive UI
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition text-center"
      >
        View My CV
      </motion.a>
    </section>
  );
};

export default Hero;
