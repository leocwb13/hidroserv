import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Gostaria de solicitar atendimento:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para mais informações. 
            Atendimento rápido e preços justos garantidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-600">{siteConfig.contact.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-600">{siteConfig.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-gray-600">{siteConfig.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-semibold">Atendemos</div>
                    <div className="text-gray-600">{siteConfig.location.region}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <div>
                    <div className="font-semibold">Horário</div>
                    <div className="text-gray-600">{siteConfig.stats.availability} • 7 dias por semana</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Atendimento Emergencial</h3>
              <p className="mb-6 text-green-100">
                Problemas com entupimento não esperam! Nossa equipe está disponível 
                24 horas para emergências.
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=🚨 EMERGÊNCIA! Preciso de atendimento URGENTE para desentupimento!`, '_blank')}
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors w-full"
              >
                🚨 Chamar Emergência
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite Atendimento</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de serviço *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione o serviço</option>
                  <option value="pia">Pia entupida</option>
                  <option value="vaso">Vaso sanitário entupido</option>
                  <option value="ralo">Ralo entupido</option>
                  <option value="caixa-gordura">Caixa de gordura</option>
                  <option value="esgoto">Rede de esgoto</option>
                  <option value="emergencia">Emergência</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva sua necessidade
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Detalhe sua necessidade para um atendimento mais preciso"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Entrar em Contato via WhatsApp
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}