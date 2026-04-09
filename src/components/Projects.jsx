import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa6';

const projects = [
  {
    title: 'Video Streaming Microservices',
    description: 'A high-performance backend orchestrating high-concurrency video streaming tasks and data-intensive services. Built with Go.',
    tech: ['Go', 'gRPC', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Mohammad-Niyas/Video-Streaming-Microservices',
    tag: 'Infrastructure'
  },
  {
    title: 'Split Expense System',
    description: 'Distributed microservices architecture focusing on financial logic, transaction consistency, and multi-service orchestration.',
    tech: ['Go', 'Microservices', 'GIN', 'PostgreSQL', 'AI Integration', 'LLM Orchestration'],
    github: 'https://github.com/Mohammad-Niyas/Split-Expense-System-Microservices',
    tag: 'Fintech'
  },
  {
    title: 'Elayil',
    description: 'A location-based app with AI-powered data extraction from Instagram/YouTube reels to automate restaurant onboarding. Built with Groq/Llama-3.',
    tech: ['Go', 'Groq / Llama-3', 'React', 'Maps API', 'AI-Driven Data Extraction'],
    github: 'https://github.com/Mohammad-Niyas/Elayil',
    tag: 'Product'
  },
  {
    title: 'Doctor Appointment Booking',
    description: 'Enterprise-grade microservice architecture for complex scheduling logic and service isolation in healthcare.',
    tech: ['Go', 'Auth-Service', 'Docker', 'MongoDB'],
    github: 'https://github.com/Mohammad-Niyas/Doctor-Appointment-Booking-System-Microservices',
    tag: 'HealthCare'
  },
  {
    title: 'VogueLuxe E-commerce',
    description: 'A premium, responsive front-end for a lifestyle brand with deep focus on modern UI/UX principles and interactive elements.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Mohammad-Niyas/VogueLuxe-Ecommerce',
    tag: 'Frontend'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Selected <span className="gradient-text">Work</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="glass"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              overflow: 'hidden', 
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            whileHover={{ y: -10 }}
          >
            <div style={{ padding: '2rem', flexGrow: 1 }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 700, letterSpacing: '0.1em' }}>{project.tag}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineBreak: 'anywhere' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', opacity: 0.7, padding: '0.1rem 0.6rem', border: '1px solid var(--glass-border)', borderRadius: '4px' }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <FaGithub size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
