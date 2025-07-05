import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-600 text-lg text-left"
      >
        <p>
          I’m a Front-End Developer with practical experience building fast, responsive, and user-friendly web apps using:
        </p>

        <p className="my-2">
          ⚙️ React.js • JavaScript • Tailwind CSS • HTML5 • APIs
        </p>

        <p>
          🚀 I recently built a full featured <strong>E-Commerce Website</strong> using React with:
        </p>

        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Product listing, filtering, and cart logic (with localStorage)</li>
          <li>Secure login & signup</li>
          <li>Checkout with payment integration</li>
          <li>Mobile-first responsive UI</li>
        </ul>

        <p>
          💡 I focus on:
        </p>

        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Clean, scalable code</li>
          <li>Performance optimization</li>
          <li>Pixel-perfect UI implementation</li>
          <li>Clear and fast communication</li>
        </ul>

        <p>
          If you're looking for someone who can turn designs into fully functional apps — let’s talk!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
