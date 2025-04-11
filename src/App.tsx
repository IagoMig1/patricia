import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Proposals } from './components/Proposals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
export function App() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Testimonials />
      <Proposals />
      <Contact />
      <Footer />
    </motion.div>;
}