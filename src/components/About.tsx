import React from 'react';
import { Users, Award, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: siteConfig.stats.clients, label: "Clientes Atendidos" },
    { icon: <Award className="w-8 h-8" />, number: siteConfig.stats.experience, label: "de Experiência" },
    { icon: <MapPin className="w-8 h-8" />, number: siteConfig.stats.neighborhoods, label: "Bairros Atendidos" },
    { icon: <Clock className="w-8 h-8" />, number: siteConfig.stats.availability, label: "Atendimento" }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              A empresa de desentupimento mais confiável da região
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com {siteConfig.stats.experience.toLowerCase()} de experiência no mercado, a {siteConfig.company.name} se consolidou como 
              referência em serviços de desentupimento e manutenção hidráulica. Nossa equipe 
              altamente qualificada utiliza equipamentos de última geração para resolver 
              qualquer problema de entupimento.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que qualidade e agilidade andam juntas. Por isso, oferecemos {siteConfig.stats.availability.toLowerCase()} em todos os nossos serviços. 
              Sua satisfação é nossa prioridade!
            </p>
            
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Oferecer soluções rápidas e eficazes em desentupimento, com atendimento 
                humanizado e preços justos, garantindo a tranquilidade dos nossos clientes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}