import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Building Tomorrow&apos;s Technology Today
              </h2>
              <p className="text-muted-foreground">
                At Rakini, we combine technical expertise with creative innovation to deliver software solutions that exceed expectations. Our team of experienced developers and designers work together to bring your vision to life.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span>10+ Years of Industry Experience</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span>100+ Successful Projects Delivered</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span>24/7 Technical Support</span>
                </li>
              </ul>
              <Button size="lg">Learn More About Us</Button>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

