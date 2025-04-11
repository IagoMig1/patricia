import React from 'react';
import { motion } from 'framer-motion';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center">
          <h2 className="text-2xl font-bold mb-4">Patrícia Oliveira</h2>
          <p className="text-gray-400">
            Por uma Caçapava mais forte e próspera
          </p>
          <div className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Todos os direitos reservados
          </div>
        </motion.div>
      </div>
    </footer>;
};