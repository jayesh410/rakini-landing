"use client"

import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

const BackgroundShape = ({ className }: { className?: string }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const x = useTransform(mouseX, (value) => value / 20)
  // const y = useTransform(mouseY, (value) => value / 20)
  const yScroll = useTransform(scrollY, [0, 500], [0, 50])

  return (
    <motion.div
      className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-60 transition-transform duration-300 hover:scale-110 hover:shadow-[0px_0px_50px_rgba(255,255,255,0.3)] ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{ x, y: yScroll }}
    />
  )
}





export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-background z-0" />

      {/* Interactive background shapes */}
      <BackgroundShape className="bg-blue-300 w-[500px] h-96 top-1/2 -right-48 transform -translate-y-1/2" />
      <BackgroundShape className="bg-green-300 w-96 h-96 -top-48 -left-48" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-10">
        <motion.h1 
          className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Ideas Into 
          <span className="text-yellow-500"> Digital Reality</span>
        </motion.h1>
        <motion.p 
          className="max-w-[800px] text-muted-foreground text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We craft innovative software solutions that drive business growth and enhance user experiences.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="px-8 py-4 text-lg font-semibold" size="lg">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="px-8 py-4 text-lg font-semibold" size="lg" variant="outline">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
