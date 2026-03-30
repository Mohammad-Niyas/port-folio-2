import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Designing for <span className="gradient-text">Scalability</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            I am a Software Engineer with a deep passion for building high-performance backend systems. My approach combines the modularity of <strong>Microservices</strong> with the efficiency of <strong>Go</strong>.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Beyond just writing code, I focus on the "Product Engineer" mindset—understanding the business value and ensuring every architectural decision serves the end user. From video streaming orchestration to fintech solutions, I build with reliability and growth in mind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ padding: '2.5rem' }}
        >
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Architectural Pillars</h3>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%' }}></div>
              <span>High-Performance Backend with Go</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%' }}></div>
              <span>Cloud Native Deployment (AWS/K8s)</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%' }}></div>
              <span>AI-Driven Productivity & Data Extraction</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%' }}></div>
              <span>End-to-End Ownership (Product Mindset)</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
