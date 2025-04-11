import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Heart, Building2, Users } from 'lucide-react';
export const About = () => {
  const achievements = [{
    number: '5+',
    text: 'Anos de experiência em gestão pública'
  }, {
    number: '1000+',
    text: 'Empreendedores atendidos'
  }, {
    number: '500+',
    text: 'Vagas de emprego intermediadas'
  }];
  return <section id="sobre" className="py-20 bg-white overflow-hidden relative">
      <motion.div animate={{
      rotate: [0, 360],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 20,
      repeat: Infinity
    }} className="absolute top-20 right-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30" />
      <motion.div animate={{
      rotate: [360, 0],
      scale: [1, 1.3, 1]
    }} transition={{
      duration: 25,
      repeat: Infinity
    }} className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30" />
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça a Patrícia Oliveira
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Natural de Caçapava, Patrícia Oliveira dedicou sua carreira ao
              desenvolvimento econômico de nossa cidade. Com experiência
              significativa no PAT (Posto de Atendimento ao Trabalhador) e na
              Sala do Empreendedor, ela trabalhou diretamente com a geração de
              empregos e apoio aos empreendedores locais.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{
              scale: 1.05
            }} className="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all shadow-lg">
                <Building2 className="w-8 h-8 text-green-700 mb-3" />
                <h3 className="font-semibold text-lg mb-2">PAT</h3>
                <p className="text-sm text-gray-600">
                  Experiência em intermediação de mão de obra e políticas de
                  emprego
                </p>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} className="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all shadow-lg">
                <Users className="w-8 h-8 text-green-700 mb-3" />
                <h3 className="font-semibold text-lg mb-2">
                  Sala do Empreendedor
                </h3>
                <p className="text-sm text-gray-600">
                  Suporte direto aos empresários e MEIs
                </p>
              </motion.div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative z-10">
              <img src="./public/patricia.jpg" alt="Patrícia Oliveira" className="rounded-lg shadow-xl" />
              <div className="absolute inset-0 border-2 border-yellow-500 rounded-lg rotate-3 z-[-1]" />
            </motion.div>
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-6 space-y-4">
              {achievements.map((achievement, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} whileHover={{
              scale: 1.05,
              rotate: 3
            }} className="bg-white p-6 rounded-lg shadow-xl relative z-10">
                  <motion.span className="text-3xl font-bold text-green-700 block" initial={{
                scale: 0.5
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }}>
                    {achievement.number}
                  </motion.span>
                  <span className="text-sm text-gray-600">
                    {achievement.text}
                  </span>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};