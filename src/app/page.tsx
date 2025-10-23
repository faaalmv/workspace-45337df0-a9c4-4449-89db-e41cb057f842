'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/layout/navbar'; // Importa el nuevo Navbar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MapPin,
  Phone,
  Clock,
  Heart,
  Star,
  MessageCircle,
  Sparkles,
  Activity,
  Users,
  Shield,
  Award,
  Zap,
  CheckCircle2,
  Quote,
  Tooth
} from 'lucide-react';

// --- Datos de ejemplo (puedes reemplazarlos con los tuyos) ---
const testimonials = [
  {
    name: 'Ana Pérez',
    avatar: 'AP',
    text: '¡El trato fue increíble! La Dra. es muy profesional y amable. Mi sonrisa nunca se ha visto mejor. Recomiendo totalmente a YE Odontología.',
  },
  {
    name: 'Carlos Gómez',
    avatar: 'CG',
    text: 'Tenía mucho miedo de ir al dentista, pero aquí me sentí muy cómodo. El procedimiento fue rápido y sin dolor. ¡Gracias!',
  },
  {
    name: 'Laura Martínez',
    avatar: 'LM',
    text: 'La tecnología que usan es de primera. Me explicaron todo el proceso con detalle y los resultados fueron fantásticos. ¡La mejor clínica de la ciudad!',
  },
];

const faqItems = [
    {
        question: '¿Atienden urgencias dentales?',
        answer: 'Sí, atendemos urgencias. Te recomendamos llamar directamente a nuestro número de contacto para coordinar tu visita lo antes posible y darte las indicaciones necesarias.',
    },
    {
        question: '¿Aceptan seguros de gastos médicos?',
        answer: 'Actualmente estamos trabajando para integrar diversos seguros. Por favor, contáctanos con la información de tu póliza para verificar si podemos aceptarla o para ofrecerte alternativas de pago.',
    },
    {
        question: '¿Cuál es el costo de una limpieza dental?',
        answer: 'El costo de una limpieza dental estándar (profilaxis) puede variar. Te invitamos a agendar una cita de valoración sin costo para darte un presupuesto exacto y personalizado según tus necesidades.',
    },
    {
        question: '¿Ofrecen tratamientos de ortodoncia invisible?',
        answer: '¡Sí! Además de la ortodoncia tradicional con brackets, ofrecemos tratamientos modernos con alineadores invisibles. Agenda una consulta para evaluar si eres candidato para este tratamiento.',
    },
];

const beforeAfterImages = [
  { before: '/api/generate-image/1', after: '/api/generate-image/2' },
  { before: '/api/generate-image/3', after: '/api/generate-image/4' },
  { before: '/api/generate-image/5', after: '/api/generate-image/6' },
];
// --- Fin de datos de ejemplo ---

export default function Home() {

  const whatsappNumber = "3313112353"
  const whatsappMessage = "Hola, me gustaría agendar una cita en YE Odontología Integral"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 relative overflow-x-hidden">
      <Navbar />

      {/* Background Blobs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 md:w-[50rem] md:h-[50rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 md:w-[50rem] md:h-[50rem] bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 md:w-[50rem] md:h-[50rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white z-10 pt-24 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 animate-pop-in">
            <div className="inline-flex items-center justify-center w-36 h-36 md:w-48 md:h-48 glassmorphism rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">YE</div>
                <div className="text-base md:text-xl text-white/90 font-bold tracking-wide">ODONTOLOGÍA</div>
                <div className="text-sm md:text-lg text-white/80">INTEGRAL</div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 glassmorphism text-white/90 bg-white/10 border-white/30 hover:bg-white/20 px-6 py-3 text-sm md:text-base font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="w-4 h-4 mr-2" />
              Excelencia en Odontología Integral
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 drop-shadow-lg">
                YE Odontología
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-rose-200 drop-shadow-lg">Integral</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Transformamos sonrisas con tecnología de punta y cuidado humano
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl px-8 py-4 text-lg md:text-xl transform hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Agendar Cita por WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glassmorphism bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600 shadow-xl px-8 py-4 text-lg md:text-xl transform hover:scale-105 transition-transform duration-300"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-6 h-6 mr-3" />
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="animate-pop-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <Phone className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-xl">Contacto Directo</h3>
              <p className="text-purple-700 font-extrabold text-2xl mb-2">{whatsappNumber}</p>
              <p className="text-sm text-gray-600 mt-2">WhatsApp disponible 24/7</p>
            </CardContent>
          </Card>

          <Card className="animate-pop-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-xl">Ubicación</h3>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">Volcán Zacapu #286</p>
              <p className="text-lg text-gray-700">Huentitán el Bajo</p>
            </CardContent>
          </Card>

          <Card className="animate-pop-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <Clock className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-xl">Horario</h3>
              <p className="text-lg text-gray-700">Lunes - Viernes</p>
              <p className="text-indigo-700 font-extrabold text-2xl">9:00 AM - 7:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: CONOCE A LA DOCTORA --- */}
      <section id="doctora" className="py-20 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="scroll-animate opacity-0">
              <img src="/api/generate-image/7" alt="Doctora en la clínica" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]" />
            </div>
            <div className="scroll-animate opacity-0" style={{ animationDelay: '0.2s' }}>
              <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 text-sm md:text-base glassmorphism">
                <Heart className="w-4 h-4 mr-2" />
                Nuestra Experta
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                Conoce a la <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-600">Dra. Ejemplo</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Con más de 10 años de experiencia, la Dra. Ejemplo se especializa en odontología cosmética y restauradora. Su pasión es crear sonrisas saludables y hermosas, utilizando las técnicas más avanzadas en un ambiente cálido y de confianza.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>Especialista en Diseño de Sonrisa.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>Certificada en Ortodoncia Invisible.</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>Miembro de la Asociación Dental Mexicana.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 text-sm md:text-base glassmorphism">
              <Tooth className="w-4 h-4 mr-2" />
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Soluciones Dentales de <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600">Vanguardia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde una simple limpieza hasta un rediseño completo de tu sonrisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ... tus tarjetas de servicio aquí ... */}
          </div>
        </div>
      </section>
      
      {/* --- NUEVA SECCIÓN: ANTES Y DESPUÉS --- */}
      <section id="resultados" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm md:text-base glassmorphism">
              <Sparkles className="w-4 h-4 mr-2" />
              Resultados Reales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Sonrisas Transformadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El cambio que logramos en nuestros pacientes es nuestra mayor satisfacción.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfterImages.map((img, index) => (
              <div key={index} className="scroll-animate opacity-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden p-0 gap-0">
                  <div className="grid grid-cols-2">
                    <img src={img.before} alt="Antes del tratamiento" className="w-full h-full object-cover aspect-[3/4]" />
                    <img src={img.after} alt="Después del tratamiento" className="w-full h-full object-cover aspect-[3/4]" />
                  </div>
                  <div className="p-4 bg-white/50 text-center">
                    <p className="font-semibold text-gray-700">Diseño de Sonrisa</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: TESTIMONIOS --- */}
      <section id="testimonios" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Lo que <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600">Nuestros Pacientes</span> Dicen
            </h2>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center text-center p-8 h-full">
                      <Quote className="w-8 h-8 text-purple-300 mb-4" />
                      <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: PREGUNTAS FRECUENTES (FAQ) --- */}
      <section id="faq" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-animate opacity-0">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                    Preguntas Frecuentes
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Resolvemos tus dudas más comunes para que vengas con total tranquilidad.
                </p>
            </div>
            <div className="max-w-3xl mx-auto scroll-animate opacity-0">
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-gray-600 leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white relative z-10">
        {/* ... tu sección CTA sin cambios ... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        {/* ... tu footer sin cambios ... */}
      </footer>
    </div>
  )
}