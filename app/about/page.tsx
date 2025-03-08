import { Button } from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card";
import Image from "next/image"

const projects = [
  { title: "Mr.Parmeshwar Gapat", description: "CEO/Director", image: "1.png" },
  { title: "Mrs.R. K. Nikam", description: "Director", image: "Group 1.png" },
  { title: "Jayesh Pandhare", description: "Project Manager", image: "jayesh.png" },
  { title: "Pravin Patil", description: "Team Leader", image: "2.png" },
 
]

export const metadata = {
  title: "About Us - Rakini Softech Pvt Ltd",
  description: "Learn more about Rakini Softech, our team, and our mission.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-500">
                Building Tomorrow&apos;s Technology Today
              </h2>
              <p className="text-muted-foreground">
                At Rakini, we combine technical expertise with creative innovation to deliver software solutions that exceed expectations. Our team of experienced developers and designers work together to bring your vision to life.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span> Custom Software Development</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span>Web & Mobile Apps</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span>UI/UX Design</span>
                </li>
              </ul>
              <Button size="lg">Learn More About Us</Button>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg overflow-hidden">
              
              <Image
                src={"/about1.jpg"}
                alt="Rakini About"
                width={100}
                height={800}
                className="mx-auto w-[600px] h-[400px] rounded-lg my-8 mt-0 "
        />


            </div>
          </div>
          <div className="text-center space-y-4 mb-12">
        
          <div className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-55 h-55 object-cover rounded-xl mb-4"
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
          </div>
        </div>
       
      </section>
    </div>
  )
}

