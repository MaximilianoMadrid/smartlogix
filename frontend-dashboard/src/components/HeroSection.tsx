import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
          SmartLogix
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Plataforma inteligente de logística basada en microservicios
        </p>
        <button className="bg-primary hover:bg-primary/80 text-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 mb-8">
          Ver Arquitectura
        </button>
        <div className="animate-bounce">
          <ChevronDown className="mx-auto text-primary" size={32} />
        </div>
      </div>
    </section>
  )
}