import React from 'react';
import { Clock, Shield, Wrench, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=Olá! Preciso de atendimento URGENTE para desentupimento.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+55${siteConfig.contact.whatsapp.slice(2)}`;
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-orange-400">Desentupimento</span>
                <br />
                <span className="text-white">Rápido & Eficiente</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                {siteConfig.stats.availability} para emergências. Desentupimos pias, vasos, ralos, caixas de gordura e muito mais. 
                <span className="font-semibold text-orange-300"> Atendimento especializado!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp Agora</span>
              </button>
              <button
                onClick={handleCall}
                className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-blue-100">Atendimento</div>
                <div className="font-semibold">{siteConfig.stats.availability}</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-blue-100">Serviço de Qualidade</div>
                <div className="font-semibold">Rápido Atendimento</div>
              </div>
              <div className="text-center">
                <Wrench className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-blue-100">Experiência</div>
                <div className="font-semibold">{siteConfig.stats.experience}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Solicite Atendimento</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Tipo de problema</option>
                  <option>Pia entupida</option>
                  <option>Vaso sanitário entupido</option>
                  <option>Ralo entupido</option>
                  <option>Caixa de gordura</option>
                  <option>Outro</option>
                </select>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Solicitar Atendimento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}