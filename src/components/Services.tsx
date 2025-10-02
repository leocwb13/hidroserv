import React from 'react';
import { 
  Droplets, 
  Home, 
  Factory, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Services() {
  const services = [
    { icon: <Droplets className="w-12 h-12 text-blue-600" />, ...siteConfig.services[0] },
    { icon: <Home className="w-12 h-12 text-blue-600" />, ...siteConfig.services[1] },
    { icon: <Factory className="w-12 h-12 text-blue-600" />, ...siteConfig.services[2] },
    { icon: <Wrench className="w-12 h-12 text-blue-600" />, ...siteConfig.services[3] },
    { icon: <Shield className="w-12 h-12 text-blue-600" />, ...siteConfig.services[4] },
    { icon: <Clock className="w-12 h-12 text-blue-600" />, ...siteConfig.services[5] }
  ];

  const benefits = [
    "Atendimento personalizado e sem compromisso",
    "Serviços executados com qualidade",
    "Profissionais certificados e uniformizados",
    "Equipamentos modernos e seguros",
    "Atendimento 24 horas para emergências",
    "Preços justos e transparentes"
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em desentupimento e manutenção hidráulica. 
            Atendemos residências, comércios e indústrias em {siteConfig.location.region}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-orange-600 font-semibold text-lg">{service.price}</div>
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=Olá! Preciso de atendimento para ${service.title.toLowerCase()}.`, '_blank')}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Solicitar Atendimento
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher a {siteConfig.company.name}?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <AlertTriangle className="w-16 h-16 text-orange-200 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Emergência?</h4>
              <p className="mb-6 text-orange-100">
                Problema com entupimento agora? Nossa equipe está pronta para atender 24 horas por dia!
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=EMERGÊNCIA! Preciso de atendimento urgente!`, '_blank')}
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors w-full"
              >
                Chamar Agora - Emergência
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}