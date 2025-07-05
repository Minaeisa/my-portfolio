import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => setSuccess(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_r51teer',
      'template_loxwmys',
      form.current,
      'cwb9sAmm-Ew4PHln0'
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setSuccess(false);
      setLoading(false);
    });
  };

  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 mb-10"
      >
        Contact Me
      </motion.h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <motion.input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg p-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg p-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="border border-gray-300 rounded-lg p-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.textarea>

        <motion.button
          type="submit"
          disabled={loading}
          className={`${
            success === true ? 'bg-green-600' : 'bg-blue-600'
          } hover:opacity-90 text-white py-3 rounded-lg shadow transition-all`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {loading ? 'Sending...' : success === true ? '✅ Sent!' : 'Send Message'}
        </motion.button>

        <AnimatePresence>
          {success === true && (
            <motion.p
              className="text-green-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {success === false && (
            <motion.p
              className="text-red-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              ❌ Failed to send message. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
};

export default Contact;
