'use client'

import { useState, useEffect } from 'react' // Importar useEffect
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  MapPin,
  Phone,
  Clock,
  Heart,
  Star,
  Calendar,
  MessageCircle,
  Sparkles,
  Activity,
  Users,
  Shield,
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react'

export default function Home() {

  const whatsappNumber = "3313112353"
  const whatsappMessage = "Hola, me gustaría agendar una cita en YE Odontología Integral"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // Efecto para animaciones de carga
  useEffect(() => {
    // Para aplicar animaciones de forma escalonada, puedes añadir clases con un retardo
    const animateElements = (selector: string, animationClass: string, delayFactor: number) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        (el as HTMLElement).style.animationDelay = `${i * delayFactor}s`;
        el.classList.add(animationClass);
      });
    };

    // Aplica las animaciones después de que el componente se monte
    animateElements('.animate-on-load', 'animate-fade-in-up', 0.15); // Para texto y elementos principales
    animateElements('.animate-card-load', 'animate-pop-in', 0.2); // Para tarjetas
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background Blobs/Shapes (Opcional para un look más "futurista" de glasmorfismo) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white z-10 pt-24 pb-48 md:pb-64"> {/* Aumentar padding bottom */}
        <div className="container mx-auto px-4 text-center">
          {/* Logo Section */}
          <div className="mb-8 animate-on-load">
            <div className="inline-flex items-center justify-center w-36 h-36 md:w-48 md:h-48 glassmorphism rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300"> {/* Agrandar logo y más glassmorphism */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">YE</div> {/* Fuente más grande y bold */}
                <div className="text-base md:text-xl text-white/90 font-bold tracking-wide">ODONTOLOGÍA</div> {/* Espaciado de letras */}
                <div className="text-sm md:text-lg text-white/80">INTEGRAL</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 glassmorphism text-white/90 bg-white/10 border-white/30 hover:bg-white/20 px-6 py-3 text-sm md:text-base font-medium animate-on-load">
              <Sparkles className="w-4 h-4 mr-2" />
              Excelencia en Odontología Integral
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-on-load">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 drop-shadow-lg">
                YE Odontología
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-rose-200 drop-shadow-lg">Integral</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto animate-on-load">
              Transformamos sonrisas con tecnología de punta y cuidado humano
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-on-load">
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
      <section className="container mx-auto px-4 -mt-32 md:-mt-40 relative z-20 mb-16"> {/* Ajuste de margen negativo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"> {/* Aumentar max-width y gap */}
          <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
            <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <Phone className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-xl">Contacto Directo</h3>
              <p className="text-purple-700 font-extrabold text-2xl mb-2">{whatsappNumber}</p>
              <p className="text-sm text-gray-600 mt-2">WhatsApp disponible 24/7</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
            <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-xl">Ubicación</h3>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">Volcán Zacapu #286</p>
              <p className="text-lg text-gray-700">Huentitán el Bajo</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
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

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-24 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-load">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 text-sm md:text-base glassmorphism">
              <Award className="w-4 h-4 mr-2" />
              Servicios de Excelencia
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Atención Dental
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600"> Integral</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para mantener tu sonrisa saludable y brillante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Limpieza Dental</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Profilaxis profesional con tecnología avanzada para mantener tu sonrisa saludable y brillante, 
                  previniendo caries y enfermedades periodontales.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ortodoncia</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Corrección de alineación dental con tratamientos personalizados, incluyendo brackets y 
                  alineadores invisibles, para una sonrisa perfecta y funcional.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 animate-card-load">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Revisión General</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Evaluación completa de tu salud bucal con diagnóstico preciso y tratamiento integral, 
                  asegurando el bienestar de tu boca a largo plazo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="text-center mb-16 animate-on-load">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-2 text-sm md:text-base glassmorphism">
            <Zap className="w-4 h-4 mr-2" />
            Por Qué Elegirnos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Experiencia y
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"> Tecnología</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center animate-card-load">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 shadow-md">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Equipo Experto</h3>
            <p className="text-gray-600 text-sm">Profesionales certificados con años de experiencia, comprometidos con tu bienestar.</p>
          </div>

          <div className="text-center animate-card-load">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 shadow-md">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Tecnología Avanzada</h3>
            <p className="text-gray-600 text-sm">Utilizamos equipamiento de última generación para diagnósticos precisos y tratamientos eficientes.</p>
          </div>

          <div className="text-center animate-card-load">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 shadow-md">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Trato Humano</h3>
            <p className="text-gray-600 text-sm">Te brindamos una atención personalizada y cercana, haciéndote sentir cómodo y seguro.</p>
          </div>

          <div className="text-center animate-card-load">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 shadow-md">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Garantía de Calidad</h3>
            <p className="text-gray-600 text-sm">Nos comprometemos con resultados duraderos que superan tus expectativas de salud y estética.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 glassmorphism text-white/90 bg-white/10 border-white/30 hover:bg-white/20 px-6 py-3 text-sm md:text-base font-medium animate-on-load">
            <Sparkles className="w-4 h-4 mr-2" />
            Tu Sonrisa Perfecta te Espera
          </Badge>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 animate-on-load">
            ¿Listo para Transformar
            <span className="block text-3xl md:text-5xl text-rose-200 drop-shadow-lg">Tu Sonrisa?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto animate-on-load">
            Agenda tu cita hoy y descubre por qué somos la mejor opción para tu salud dental
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-on-load">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl px-10 py-6 text-xl transform hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Agendar Cita Ahora
            </Button>
            <Button
              size="lg"
              // Modificación para visibilidad: botón con fondo blanco y texto oscuro
              className="glassmorphism bg-white text-purple-700 hover:bg-gray-100 shadow-2xl px-10 py-6 text-xl font-bold transform hover:scale-105 transition-transform duration-300 border border-transparent"
              onClick={() => window.open(`tel:${whatsappNumber}`)}
            >
              <Phone className="w-6 h-6 mr-3 text-purple-700" />
              Llamar: {whatsappNumber}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-load">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">YE Odontología Integral</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Tu salud bucal es nuestra prioridad. Ofrecemos atención dental integral
                con tecnología de última generación y un equipo de profesionales dedicados.
              </p>
            </div>

            <div className="animate-on-load">
              <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  {whatsappNumber}
                </p>
                <p className="flex items-center hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  WhatsApp disponible
                </p>
                <p className="flex items-center hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-3" />
                  Volcán Zacapu #286, Huentitán el Bajo
                </p>
              </div>
            </div>

            <div className="animate-on-load">
              <h4 className="text-lg font-semibold mb-4">Horario de Atención</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-red-400">Cerrado</span>
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 YE Odontología Integral. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">Construido con ❤️ para tu sonrisa perfecta</p>
          </div>
        </div>
      </footer>
    </div>
  )
}