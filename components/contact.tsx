
import Link from "next/link"
import { Button } from "@/components/ui/button"
 function ContactSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto md:text-lg">
            Ready to start your next project? Contact us for a free consultation. We’re excited to hear from you!
          </p>
          <Button asChild size="lg" className="px-8 py-4 font-semibold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>


      </div>
    </section>
  )
}

export default ContactSection
