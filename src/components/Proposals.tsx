import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartHandshake, Sprout } from 'lucide-react';
export const Proposals = () => {
  const proposals = [{
    icon: Building2,
    title: 'Desenvolvimento Econômico',
    description: 'Incentivo ao empreendedorismo local e atração de novos investimentos.'
  }, {
    icon: GraduationCap,
    title: 'Educação de Qualidade',
    description: 'Investimento em escolas e programas de capacitação profissional.'
  }, {
    icon: HeartHandshake,
    title: 'Apoio ao Comerciante',
    description: 'Programas de suporte aos pequenos e médios empresários.'
  }, {
    icon: Sprout,
    title: 'Sustentabilidade',
    description: 'Projetos para um desenvolvimento urbano sustentável.'
  }];
  return <section id="propostas" className="py-20 bg-green-50">
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
            Nossas Propostas
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proposals.map((proposal, index) => <motion.div key={proposal.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <proposal.icon className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{proposal.title}</h3>
              <p className="text-gray-600">{proposal.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};