const evaluations = [
  'Requerimientos funcionales',
  'Escalabilidad',
  'Alta disponibilidad 99.9%',
  'Reducción de costos',
  'Automatización logística',
]

export default function EvaluationSection() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary">Evaluación General</h2>
        
        <div className="card">
          <p className="text-lg mb-6">La solución SmartLogix cumple plenamente con:</p>
          <ul className="text-gray-300 space-y-2">
            {evaluations.map((evaluation, index) => (
              <li key={index}>• {evaluation}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}