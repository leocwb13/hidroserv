import React, { useState } from 'react';
import { Settings, Save, X, CreditCard as Edit3, Phone, Mail, MapPin, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [config, setConfig] = useState(siteConfig);
  const [activeTab, setActiveTab] = useState('company');

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar as configurações
    console.log('Configurações salvas:', config);
    alert('Configurações salvas com sucesso!');
    onClose();
  };

  const updateConfig = (section: string, field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const updateService = (index: number, field: string, value: string) => {
    const newServices = [...config.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setConfig(prev => ({ ...prev, services: newServices }));
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    const newTestimonials = [...config.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setConfig(prev => ({ ...prev, testimonials: newTestimonials }));
  };

  return (
    <div className="bg-white rounded-2xl max-w-6xl w-full mx-auto shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Painel Administrativo</h2>
          </div>
          <button 
            onClick={onClose} 
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <X className="w-6 h-6" />
            <span>Sair</span>
          </button>
        </div>

        <div className="flex">
          <div className="w-64 bg-gray-50 p-4 border-r">
            <nav className="space-y-2">
              {[
                { id: 'company', label: 'Empresa', icon: Edit3 },
                { id: 'contact', label: 'Contato', icon: Phone },
                { id: 'location', label: 'Localização', icon: MapPin },
                { id: 'services', label: 'Serviços', icon: Settings },
                { id: 'testimonials', label: 'Depoimentos', icon: Star }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {activeTab === 'company' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Informações da Empresa</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Empresa</label>
                    <input
                      type="text"
                      value={config.company.name}
                      onChange={(e) => updateConfig('company', 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={config.company.fullName}
                      onChange={(e) => updateConfig('company', 'fullName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logo (emoji ou URL)</label>
                  <input
                    type="text"
                    value={config.company.logo}
                    onChange={(e) => updateConfig('company', 'logo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="🔧 ou https://exemplo.com/logo.png"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slogan</label>
                  <input
                    type="text"
                    value={config.company.tagline}
                    onChange={(e) => updateConfig('company', 'tagline', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Informações de Contato</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="text"
                      value={config.contact.phone}
                      onChange={(e) => updateConfig('contact', 'phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp (com código do país)</label>
                    <input
                      type="text"
                      value={config.contact.whatsapp}
                      onChange={(e) => updateConfig('contact', 'whatsapp', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="5541999999999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    value={config.contact.email}
                    onChange={(e) => updateConfig('contact', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Localização e Atendimento</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
                    <input
                      type="text"
                      value={config.location.city}
                      onChange={(e) => updateConfig('location', 'city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                    <input
                      type="text"
                      value={config.location.state}
                      onChange={(e) => updateConfig('location', 'state', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Região</label>
                    <input
                      type="text"
                      value={config.location.region}
                      onChange={(e) => updateConfig('location', 'region', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bairros Atendidos (separados por vírgula)</label>
                  <textarea
                    value={config.location.neighborhoods.join(', ')}
                    onChange={(e) => updateConfig('location', 'neighborhoods', e.target.value.split(', '))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Serviços Oferecidos</h3>
                
                {config.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => updateService(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preço</label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => updateService(index, 'price', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateService(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Depoimentos de Clientes</h3>
                
                {config.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Localização</label>
                        <input
                          type="text"
                          value={testimonial.location}
                          onChange={(e) => updateTestimonial(index, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                        <input
                          type="text"
                          value={testimonial.date}
                          onChange={(e) => updateTestimonial(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Depoimento</label>
                      <textarea
                        value={testimonial.text}
                        onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-6 flex justify-end space-x-4">
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voltar ao Site
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Salvar Alterações</span>
          </button>
        </div>
    </div>
  );
}