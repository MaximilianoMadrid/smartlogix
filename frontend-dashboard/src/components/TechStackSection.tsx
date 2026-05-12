import { Code, Server, MessageSquare, Container, Database } from 'lucide-react'

const technologies = [
  { name: 'React / Next.js', icon: Code },
  { name: 'Spring Boot', icon: Server },
  { name: 'RabbitMQ / AWS SQS', icon: MessageSquare },
  { name: 'Docker', icon: Container },
  { name: 'PostgreSQL / MariaDB', icon: Database },
]

export default function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Stack Tecnológico</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="card text-center">
              <tech.icon className="mx-auto mb-4 text-primary" size={48} />
              <h4 className="text-xl font-semibold">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}