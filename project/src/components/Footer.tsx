import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{siteConfig.company.logo} {siteConfig.company.name}</h3>
            <p className="text-gray-400">
              {siteConfig.company.tagline}. 
              {siteConfig.stats.availability} com qualidade.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => window.location.href = `tel:+55${siteConfig.contact.whatsapp.slice(2)}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ligar
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desentupimento de Pias</li>
              <li>Vaso Sanitário</li>
              <li>Caixa de Gordura</li>
              <li>Ralos e Grelhas</li>
              <li>Esgoto Residencial</li>
              <li>Atendimento 24h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Regiões Atendidas</h4>
            <ul className="space-y-2 text-gray-400">
              {siteConfig.location.neighborhoods.slice(0, 5).map((neighborhood, index) => (
                <li key={index}>{neighborhood}</li>
              ))}
              <li>+ {siteConfig.stats.neighborhoods} bairros</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{siteConfig.location.region}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{siteConfig.stats.availability} • 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 {siteConfig.company.name}. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ para conversão máxima
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}