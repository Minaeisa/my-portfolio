import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
  id: 1,
  name: "Ecommerce Website",
  description:
    "A full-featured e-commerce website built with React.js, Tailwind CSS, Redux Toolkit, Axios, and React Router. Includes product filtering, cart, login/register, and more.",
  image: "/ecommerce.jpeg", 
  liveLink: "https://ecommerce-project-fxi7.vercel.app/",
  codeLink: "https://github.com/Minaeisa/Ecommerce-Project",
},
  {
    id: 2,
    name: "crud-product-app",
    description: "A simple application for managing products using HTML, CSS, JavaScript, and LocalStorage.✨Features✨Add a productEdit and delete a productAutomatically calculate the total priceSearch by title or categoryStore data using LocalStorage",
    image: "/crud.jpeg",
    liveLink: "crud-product-app.vercel.app",
    codeLink: "https://github.com/Minaeisa/crud-product-app",
  },
  {
    id: 3,
    name: "To-Do-List",
    description: " Features✅:Add new tasksDelete tasksSave data in the browserSimple and user-friendly interface",
    image: "/todo.jpeg",
    liveLink: "to-do-list-chi-ashy-16.vercel.app",
    codeLink: "https://github.com/Minaeisa/To-Do-List",
  },
  {
    id: 4,
    name: "calculator",
    description: "FeaturesSupport for basic arithmetic operations (+, -, *, /)Prevent repeated consecutive calculationsButton to clear the screen (C)Button to delete the last digit (⌫)Full keyboard support (numbers, operations, Enter, Backspace, Escape)Display calculation results accurately",
    image: "/Calculator.jpeg",
    liveLink: "calculator-sage-pi-37.vercel.app",
    codeLink: "https://github.com/Minaeisa/calculator",
  },
  {
    id: 5,
    name: "Login-Form",
    description: "Animation Login-Form",
    image: "/login.jpeg",
    liveLink: "login-form-self-nine.vercel.app",
    codeLink: "https://github.com/Minaeisa/Login-Form",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-gray-900"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map(({ id, name, description, image, liveLink, codeLink }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-700 flex-grow">{description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  View Live
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
