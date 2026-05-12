import { Truck, Package, MapPin, Shield, Bell, ShoppingCart } from 'lucide-react'

const services = [
  { name: 'Servicio de Pedidos', icon: ShoppingCart, desc: 'Gestión inteligente de órdenes' },
  { name: 'Inventario', icon: Package, desc: 'Control en tiempo real de stock' },
  { name: 'Envíos', icon: Truck, desc: 'Optimización de rutas y entregas' },
  { name: 'Rastreo', icon: MapPin, desc: 'Seguimiento GPS en vivo' },
  { name: 'Autenticación', icon: Shield, desc: 'Seguridad y control de acceso' },
  { name: 'Notificaciones', icon: Bell, desc: 'Alertas y comunicaciones' },
]

export default function ArchitectureSection() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Arquitectura de Microservicios</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Servicios Independientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <service.icon className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Flujo de Arquitectura</h3>
          <div className="glass p-8 text-center">
            <div className="mb-4">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTExODI3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LXNpemU9IjE0Ij5Gcm9udGVuZCAmcmFycjsgQVBJIEdhdGV3YXkgJnJhcnI7IE1pY3Jvc2VydmljaW9zICZyYXJyOyBCYXNlcyBkZSBkYXRvcyAmcmFycjsgQnVzIGRlIGV2ZW50b3M8L3RleHQ+Cjwvc3ZnPg==" alt="Diagrama de Arquitectura" className="mx-auto" />
            </div>
            <p className="text-lg">Frontend → API Gateway → Microservicios → Bases de datos independientes → Bus de eventos</p>
          </div>
        </div>
      </div>
    </section>
  )