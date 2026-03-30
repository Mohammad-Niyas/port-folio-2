import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPaperPlane, FaEnvelope } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="container hero-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ marginBottom: '2rem' }}
      >
        <img 
          src="my-profile.jpeg" 
          alt="Mohammad Niyas" 
          style={{ width: '180px', height: '180px', borderRadius: '50%', border: '4px solid var(--primary-color)', boxShadow: '0 0 30px rgba(45, 212, 191, 0.2)', objectFit: 'cover', objectPosition: 'top' }}
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}
      >
        Mohammad <span className="gradient-text">Niyas</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem' }}
      >
        Backend Architect & Product Engineer specializing in <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Scalable Systems</span> and <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Go</span>.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ display: 'flex', gap: '1rem' }}
      >
        <button className="btn-primary" onClick={() => window.location.href = '#projects'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          View Projects <FaPaperPlane size={18} />
        </button>
        <button className="btn-outline" onClick={() => window.open('https://github.com/Mohammad-Niyas', '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          GitHub <FaGithub size={18} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
