"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Laptop, LayoutGrid, MessagesSquare, Rocket } from 'lucide-react'

const services = [
  { icon: <Globe className="h-8 w-8" />, title: "Web Application", description: "Custom web applications built with cutting-edge technologies" },
  { icon: <Laptop className="h-8 w-8" />, title: "Mobile Application", description: "Native and cross-platform mobile applications" },
  { icon: <Code2 className="h-8 w-8" />, title: "Custom Software", description: "Tailored software solutions for your business needs" },
  { icon: <LayoutGrid className="h-8 w-8" />, title: "UI/UX Design", description: "User-centered design that delivers exceptional experiences" },
  { icon: <Rocket className="h-8 w-8" />, title: "DevOps", description: "Streamlined deployment and maintenance processes" },
  { icon: <MessagesSquare className="h-8 w-8" />, title: "Consultation", description: "Expert guidance on your technology decisions" },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container space-y-12 px-4 mx-auto">
        <div className="text-center space-y-4">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="max-w-[700px] mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive software development solutions tailored to your needs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="p-2 w-fit rounded-lg bg-yellow-500/10 text-yellow-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
