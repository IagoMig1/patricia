import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
      setIsOpen(false);
    }
  };
  return <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-2xl font-bold text-green-700">
            Patrícia Oliveira
          </motion.div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {['início', 'sobre', 'propostas', 'contato'].map(item => <motion.a key={item} href={`#${item}`} onClick={e => {
            e.preventDefault();
            scrollToSection(item);
          }} className="text-gray-600 hover:text-green-700 transition-colors capitalize" whileHover={{
            scale: 1.05
          }}>
                {item}
              </motion.a>)}
          </nav>
          {/* Mobile Menu Button */}
          <motion.button className="md:hidden" onClick={() => setIsOpen(!isOpen)} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        {/* Mobile Menu */}
        {isOpen && <motion.nav initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden py-4">
            {['início', 'sobre', 'propostas', 'contato'].map(item => <a key={item} href={`#${item}`} onClick={e => {
          e.preventDefault();
          scrollToSection(item);
        }} className="block py-2 text-gray-600 hover:text-green-700 transition-colors capitalize">
                {item}
              </a>)}
          </motion.nav>}
      </div>
    </header>;
};