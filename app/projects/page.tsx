import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  { title: "E-commerce Platform", description: "A full-featured online store with inventory management", image: "/placeholder.svg" },
  { title: "Mobile Banking App", description: "Secure and user-friendly mobile banking solution", image: "/placeholder.svg" },
  { title: "IoT Dashboard", description: "Real-time monitoring dashboard for IoT devices", image: "/placeholder.svg" },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

