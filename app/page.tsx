import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactSection from "@/components/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      
      {/* About Section Preview */}
      <section className="py-20 grid md:grid-cols-2 grid-cols-1">
        <div className="container mx-auto px-5">
          
        </div>
        <div className="container mx-auto px-5">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Learn more about our company, our values, and our mission to transform ideas into digital reality.
            </p>
            <Button asChild>
              <Link href="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-5">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Projects</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Explore some of our recent work and see how we&apos;ve helped businesses achieve their goals.
            </p>
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
     <ContactSection/>

    </div>
  )
}

