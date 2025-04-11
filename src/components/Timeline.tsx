import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Building2 } from 'lucide-react';
export const Timeline = () => {
  const timeline = [{
    year: '2020-2025',
    title: 'PAT - Posto de Atendimento ao Trabalhador',
    description: 'Coordenação de programas de empregabilidade',
    icon: Briefcase
  }, {
    year: '2020-2025',
    title: 'Programas de Capacitação',
    description: 'Desenvolvimento de projetos com SEBRAE',
    icon: Building2
  }, {
    year: '2022-2025',
    title: 'Sala do empreendedor',
    description: 'Capacitação de',
    icon: Award
  }, {
    year: '2020- Hoje',
    title: 'Desenvolvimento Econômico',
    description: 'Coordenação de projetos de fomento local',
    icon: Users
  }];
  return <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
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
            Trajetória Profissional
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
        </motion.div>
        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200" />
          <div className="space-y-12">
            {timeline.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 p-4">
                  <motion.div whileHover={{
                scale: 1.05
              }} className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <item.icon className="w-8 h-8 text-green-700" />
                      <span className="text-green-700 font-bold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
                <div className="relative w-8">
                  <motion.div initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-700 rounded-full" />
                </div>
                <div className="w-1/2" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};