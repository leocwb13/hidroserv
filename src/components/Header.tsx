import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=Olá! Preciso de atendimento para desentupimento.`, '_blank');
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              {siteConfig.company.logo} {siteConfig.company.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-700 transition-colors">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-700 transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-700 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-700 transition-colors">Contato</a>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-700 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-700 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-700 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-700 transition-colors">Contato</a>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 mx-4"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}