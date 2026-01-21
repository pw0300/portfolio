import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPhilosophy from './components/ProductPhilosophy';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import CaseStudyPage from './components/CaseStudyPage';
import { caseStudies, philosophy, experiences } from './data';
import './index.css';

const Home = () => (
  <>
    <Navbar />
    <section id="hero">
      <Hero />
    </section>

    <div id="experience" className="my-20">
      <Experience experiences={experiences} />
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

    <div id="philosophy" className="my-32">
      <ProductPhilosophy data={philosophy} />
    </div>

    <section id="contact" className="py-20 border-t border-border mt-20 bg-gradient-to-b from-bg-dark to-black">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">Found the right fit?</h2>
        <p className="text-xl text-text-secondary mb-10 leading-relaxed">
          I'm currently opening my calendar for <span className="text-accent">Product Lead</span> roles.
          Let's verify if I can solve your current bottlenecks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/917737558890?text=Hi%20Pratik%2C%20I%20reviewed%20your%20portfolio.%20Are%20you%20open%20for%20a%20quick%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center group"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            <span>WhatsApp Me</span>
          </a>
          <a
            href="mailto:pratik2022@email.iimcal.ac.in"
            className="btn-clean text-lg px-8 py-4 border border-border rounded-lg hover:border-accent hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Send Email
          </a>
          <a
            href="/Pratik_Wankhede_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clean text-lg px-8 py-4 border border-border rounded-lg hover:border-accent hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Download Resume
          </a>
        </div>
        <p className="mt-16 text-text-secondary text-sm border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} Pratik Wankhede. Built with React & Vite.
        </p>
      </div>
    </section>

    {/* Floating WhatsApp Lead Gen Button */}
    <a
      href="https://wa.me/917737558890?text=Hi%20Pratik%2C%20I%20reviewed%20your%20portfolio.%20Are%20you%20open%20for%20a%20quick%20chat%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group backdrop-blur-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        Quick Chat
      </span>
    </a>
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
