import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPhilosophy from './components/ProductPhilosophy';
import CaseStudy from './components/CaseStudy';
import CaseStudyPage from './components/CaseStudyPage';
import { caseStudies, philosophy } from './data';
import './index.css';

const Home = () => (
  <>
    <Navbar />
    <section id="hero">
      <Hero />
    </section>

    <div id="philosophy" className="my-32">
      <ProductPhilosophy data={philosophy} />
    </div>

    <section id="work" className="py-20 container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Selected <span className="text-accent">Work</span>
      </h2>
      <div className="space-y-40">
        {caseStudies.map((study, index) => (
          <CaseStudy
            key={study.id}
            study={study}
            index={index}
          />
        ))}
      </div>
    </section>

    <section id="contact" className="py-20 border-t border-border mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Build?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:pratik.wankhede@example.com"
            className="btn-primary text-xl px-8 py-4"
          >
            Get in Touch
          </a>
          <a
            href="/Pratik_Wankhede_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clean text-xl px-8 py-4 border border-border rounded-lg hover:border-accent"
          >
            Download Resume
          </a>
        </div>
        <p className="mt-8 text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Pratik Wankhede. Built with React & Vite.
        </p>
      </div>
    </section>
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark text-text-primary font-sans selection:bg-accent selection:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
