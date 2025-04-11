import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Building, Target } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Programa de Capacitação',
    description: 'Desenvolvimento de programas de qualificação profissional em parceria com o SEBRAE',
    icon: Target,
    stats: '500+ pessoas capacitadas',
    color: 'from-green-500 to-emerald-700'
  }, {
    title: 'Intermediação de Empregos',
    description: 'Gestão do banco de vagas e conexão entre empresas e trabalhadores',
    icon: Briefcase,
    stats: '1000+ vagas preenchidas',
    color: 'from-blue-500 to-indigo-700'
  }, {
    title: 'Apoio ao MEI',
    description: 'Suporte na formalização e gestão de Microempreendedores Individuais',
    icon: Users,
    stats: '300+ MEIs formalizados',
    color: 'from-purple-500 to-pink-700'
  }, {
    title: 'Desenvolvimento Local',
    description: 'Projetos de fomento à economia local e atração de investimentos',
    icon: Building,
    stats: '50+ parcerias estabelecidas',
    color: 'from-orange-500 to-red-700'
  }];
  return <section className="py-20 bg-gray-50">
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
            Projetos Realizados
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos principais projetos desenvolvidos em prol do
            desenvolvimento econômico de Caçapava
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5
        }} className="relative group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                <div className={`h-24 bg-gradient-to-r ${project.color} p-6`}>
                  <project.icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="text-sm font-semibold text-green-700">
                    {project.stats}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};