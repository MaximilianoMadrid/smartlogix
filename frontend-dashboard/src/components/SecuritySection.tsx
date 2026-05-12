export default function SecuritySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Seguridad y Ética</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Seguridad</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• HTTPS/TLS 1.3</li>
              <li>• JWT Authentication</li>
              <li>• Control por roles</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Ética</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Sostenibilidad</li>
              <li>• Optimización de recursos</li>
              <li>• Transparencia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}