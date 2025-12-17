'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(containerRef, { once: true })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    // Mobile: Same as Desktop - Full Video with Text Overlay
    return (
      <div ref={containerRef} className="relative min-h-screen overflow-hidden w-full">
        {/* Mobile Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{
            filter: 'brightness(0.8) contrast(1.1) saturate(1.2)'
          }}
        >
          <source src="/Webm/copy_F189B18E-367C-43A0-A1D9-86F9FCB98831.webm" type="video/webm" />
        </video>
        
        {/* Subtle Video Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
          <div className="text-center text-white z-10 mb-16">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Wir kümmern uns um Ihr Social Media,
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              damit Sie es nicht müssen.
            </motion.h2>
          </div>
          
          {/* Glass Buttons for Mobile - positioned lower */}
          <div className="absolute bottom-20 left-6 right-6">
            <motion.div 
              className="flex flex-col gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt starten
              </a>
              <a
                href="/service"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Mehr erfahren
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop: True Split-Screen
  return (
    <div ref={containerRef} className="relative h-screen w-full flex">
      
      {/* LEFT HALF - Video */}
      <motion.div 
        className="relative w-full h-full overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{
            filter: 'brightness(0.8) contrast(1.1) saturate(1.2)'
          }}
        >
          <source src="/Webm/copy_F189B18E-367C-43A0-A1D9-86F9FCB98831.webm" type="video/webm" />
        </video>
        
        {/* Subtle Video Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />
        
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Wir kümmern uns um Ihr Social Media,
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl font-light mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              damit Sie es nicht müssen.
            </motion.h2>
            
            {/* Glass Buttons for Desktop */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt starten
              </a>
              <a
                href="/service"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Mehr erfahren
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}