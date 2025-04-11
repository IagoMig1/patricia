import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const Hero = () => {
  const scrollToPropostas = () => {
    document.getElementById('propostas')?.scrollIntoView();
  };
  return <section id="início" className="min-h-screen hero-background">
      <div className="min-h-screen hero-overlay">
        <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center pt-20">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="space-y-6">
              <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }}>
                Por uma Caçapava mais forte e próspera
              </motion.h1>
              <motion.p className="text-xl text-gray-700" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }}>
                Compromisso com o desenvolvimento econômico e social da nossa
                cidade
              </motion.p>
              <motion.button onClick={scrollToPropostas} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors flex items-center gap-2 group" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }}>
                Conheça nossas propostas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} className="relative">
              <motion.div className="relative z-10 rounded-lg overflow-hidden" whileHover={{
              scale: 1.02
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <img src="/patricia2.jpg" alt="Patrícia Oliveira" className="w-full rounded-lg shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </motion.div>
              <motion.div className="absolute inset-0 border-2 border-yellow-500 rounded-lg z-0" animate={{
              rotate: [0, 3, 0],
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }} />
              <motion.div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full z-[-1]" animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse'
            }} />
              <motion.div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full z-[-1]" animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0]
            }} transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};