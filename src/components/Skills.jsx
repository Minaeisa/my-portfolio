import React from 'react';
import { motion } from 'framer-motion';

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript"];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 mb-10"
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white px-6 py-3 rounded-full shadow text-gray-700 text-lg font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;