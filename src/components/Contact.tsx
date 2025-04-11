import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_4ojyolt',
        'template_rp01wc5',
        form.current,
        '3T4kw0p6ndOYvtYBv'
      )
      .then((result) => {
        console.log('Mensagem enviada com sucesso:', result.text);
        alert('✅ Mensagem enviada com sucesso!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error.text);
        alert('❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-green-700" />
              <p className="text-gray-600">Caçapava, SP</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-700" />
              <p className="text-gray-600">(12) 99791-0380</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-green-700" />
              <p className="text-gray-600">contato@patriciaoliveira.com.br</p>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Seu nome"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Seu e-mail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors"
              type="submit"
            >
              Enviar mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
