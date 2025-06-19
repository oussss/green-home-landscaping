import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollAnimations } from './hooks/useScrollAnimations';

function App() {
  useScrollSpy();
  useScrollAnimations();

  return (
    <div className="font-body bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;