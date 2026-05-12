const benefits = [
  'Resiliencia',
  'Escalabilidad',
  'Tolerancia a fallos',
  'Consistencia eventual',
  'Procesamiento asíncrono',
]

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Beneficios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">Sistema Tradicional</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Monolítico y rígido</li>
              <li>• Puntos únicos de fallo</li>
              <li>• Escalabilidad limitada</li>
              <li>• Alto acoplamiento</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Arquitectura Orientada a Eventos</h3>
            <ul className="text-gray-300 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}