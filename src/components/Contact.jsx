import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's <span className="gradient-text">Build</span> Something</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Currently open for freelance roles and collaborations in backend architecture and product engineering.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadniyas662@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FaEnvelope size={18} /> Email Me
          </a>
          <a href="https://github.com/Mohammad-Niyas" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FaGithub size={18} /> GitHub
          </a>
        </div>
        
        <p style={{ marginTop: '3rem', opacity: 0.6, fontSize: '0.9rem' }}>
          Based in Kerala, India | Global Collaboration
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
