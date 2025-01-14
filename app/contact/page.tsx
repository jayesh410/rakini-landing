import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground">
                Ready to start your next project? Contact us for a free consultation.
              </p>
            </div>
            <div className="grid gap-4">
              <Button size="lg" className="w-full">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Send us an Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

