'use client'

import { useState } from 'react'
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
  Zap
} from 'lucide-react'

export default function Home() {

  const whatsappNumber = "3313112353"
  const whatsappMessage = "Hola, me gustaría agendar una cita en YE Odontología Integral"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 glassmorphism rounded-2xl shadow-2xl p-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">YE</div>
                <div className="text-sm md:text-base text-white/90 font-bold">ODONTOLOGÍA</div>
                <div className="text-xs md:text-sm text-white/80">INTEGRAL</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 glassmorphism text-white px-6 py-3 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Excelencia en Odontología Integral
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                YE Odontología
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-rose-200">Integral</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
              Transformamos sonrisas con tecnología de punta y cuidado humano
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl px-8 py-4 text-lg"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Agendar Cita por WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 shadow-xl px-8 py-4 text-lg"
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
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Contacto Directo</h3>
              <p className="text-purple-600 font-bold text-lg">{whatsappNumber}</p>
              <p className="text-sm text-gray-600 mt-2">WhatsApp disponible 24/7</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Ubicación</h3>
              <p className="text-sm text-gray-700 font-medium">Volcán Zacapu #286</p>
              <p className="text-sm text-gray-700">Huentitán el Bajo</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Horario</h3>
              <p className="text-sm text-gray-700">Lunes - Viernes</p>
              <p className="text-indigo-600 font-bold">9:00 AM - 7:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Servicios de Excelencia
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Atención Dental
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600"> Integral</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para mantener tu sonrisa saludable y brillante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Limpieza Dental</h3>
                <p className="text-gray-600 leading-relaxed">Profilaxis profesional con tecnología avanzada para mantener tu sonrisa saludable y brillante</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ortodoncia</h3>
                <p className="text-gray-600 leading-relaxed">Corrección de alineación dental con tratamientos personalizados para una sonrisa perfecta</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Revisión General</h3>
                <p className="text-gray-600 leading-relaxed">Evaluación completa de tu salud bucal con diagnóstico preciso y tratamiento integral</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Por Qué Elegirnos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiencia y
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"> Tecnología</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Equipo Experto</h3>
            <p className="text-gray-600 text-sm">Profesionales certificados con años de experiencia</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Tecnología Avanzada</h3>
            <p className="text-gray-600 text-sm">Equipamiento de última generación</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Trato Humano</h3>
            <p className="text-gray-600 text-sm">Atención personalizada y cercana</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Garantía de Calidad</h3>
            <p className="text-gray-600 text-sm">Resultados que superan expectativas</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-purple-600 via-rose-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 glassmorphism text-white px-6 py-3">
            <Sparkles className="w-4 h-4 mr-2" />
            Tu Sonrisa Perfecta te Espera
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para Transformar
            <span className="block text-3xl md:text-5xl text-rose-200">Tu Sonrisa?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Agenda tu cita hoy y descubre por qué somos la mejor opción para tu salud dental
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl px-10 py-6 text-xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Agendar Cita Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl px-10 py-6 text-xl"
              onClick={() => window.open(`tel:${whatsappNumber}`)}
            >
              <Phone className="w-6 h-6 mr-3" />
              Llamar: {whatsappNumber}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-rose-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">YE Odontología Integral</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Tu salud bucal es nuestra prioridad. Ofrecemos atención dental integral 
                con tecnología de última generación y un equipo de profesionales dedicados.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
              <div className="space-y-3 text-gray-400">
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
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Horario de Atención</h4>
              <div className="space-y-2 text-gray-400">
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
          
          <div className="text-center text-gray-400">
            <p>© 2024 YE Odontología Integral. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">Construido con ❤️ para tu sonrisa perfecta</p>
          </div>
        </div>
      </footer>
    </div>
  )
}