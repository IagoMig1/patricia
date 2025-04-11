import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    name: 'João Silva',
    role: 'Empresário Local',
    content: 'A Patrícia foi fundamental no desenvolvimento do meu negócio, oferecendo todo o suporte necessário através da Sala do Empreendedor.'
  }, {
    name: 'Maria Oliveira',
    role: 'Microempreendedora',
    content: 'Graças ao apoio da Patrícia, consegui formalizar meu negócio e expandir minhas atividades.'
  }, {
    name: 'Carlos Santos',
    role: 'Comerciante',
    content: 'O trabalho desenvolvido no PAT ajudou muito na contratação de funcionários qualificados para minha empresa.'
  }];
  return <section className="py-20 bg-green-50 overflow-hidden">
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
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} whileHover={{
          y: -10
        }} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-xl relative z-10">
                <Quote className="w-8 h-8 text-green-700 mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-green-700">{testimonial.role}</p>
                </div>
              </div>
              {/* Elemento decorativo */}
              <div className="absolute inset-0 bg-green-100 rounded-lg transform rotate-3 -z-10" />
            </motion.div>)}
        </div>
      </div>
    </section>;
};