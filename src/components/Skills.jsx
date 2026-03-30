import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Backend', skills: ['Go (Golang)', 'Gin', 'gRPC', 'REST APIs'] },
  { category: 'Data', skills: ['PostgreSQL', 'MongoDB', 'SQL', 'NoSQL'] },
  { category: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'AWS EKS', 'CI/CD Pipelines'] },
  { category: 'Specialized', skills: ['System Design', 'Microservices', 'AI Integration', 'LLM Orchestration', 'Unit Testing'] }
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Tech <span className="gradient-text">Stack</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skillsData.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="glass"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  style={{ background: 'rgba(45, 212, 191, 0.1)', border: '1px solid rgba(45, 212, 191, 0.2)', padding: '0.4rem 0.8rem', borderRadius: '2rem', fontSize: '0.9rem', color: 'var(--primary-color)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
