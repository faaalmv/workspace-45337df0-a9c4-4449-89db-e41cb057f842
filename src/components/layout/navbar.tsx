'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Sparkles, MapPin } from 'lucide-react'; // Importar MapPin
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "3313112353";
  const whatsappMessage = "Hola, me gustaría agendar una cita en YE Odontología Integral";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'py-2 glassmorphism' : 'py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-rose-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white hidden sm:block">YE Odontología</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <a onClick={() => scrollToSection('servicios')} className="cursor-pointer hover:text-rose-200 transition-colors">Servicios</a>
          <a onClick={() => scrollToSection('doctora')} className="cursor-pointer hover:text-rose-200 transition-colors">La Doctora</a>
          <a onClick={() => scrollToSection('testimonios')} className="cursor-pointer hover:text-rose-200 transition-colors">Testimonios</a>
          <a onClick={() => scrollToSection('ubicacion')} className="cursor-pointer hover:text-rose-200 transition-colors">Ubicación</a> {/* NUEVO ENLACE */}
          <a onClick={() => scrollToSection('faq')} className="cursor-pointer hover:text-rose-200 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button 
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex glassmorphism text-white border-white/30 hover:bg-white hover:text-purple-600"
            onClick={() => window.open(`tel:${whatsappNumber}`)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Llamar
          </Button>
        </div>
      </div>
    </header>
  );
}