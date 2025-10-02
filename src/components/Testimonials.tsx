import React from 'react';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Testimonials() {
  const testimonials = siteConfig.testimonials;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            A confiança dos nossos clientes é o nosso maior patrimônio. 
            Veja os depoimentos de quem já utilizou nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-200 mb-2">Avaliação média</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm text-blue-300 mt-2">Baseado em 500+ avaliações</div>
          </div>
        </div>
      </div>
    </section>
  );
}