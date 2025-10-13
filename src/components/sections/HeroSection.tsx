'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

const AnimatedText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const words = text.split(' ')
  
  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton
}: HeroSectionProps) {
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
    // Mobile: Stacked Layout
    return (
      <div ref={containerRef} className="relative min-h-screen flex flex-col">
        {/* Mobile Video Section */}
        <div className="relative h-1/2 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{
              filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
            }}
          >
            <source src="/Webm/copy_F189B18E-367C-43A0-A1D9-86F9FCB98831.webm" type="video/webm" />
          </video>
          
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>

        {/* Mobile Text Section */}
        <div className="relative h-1/2 bg-white flex items-center justify-center p-6">
          <div className="max-w-lg text-center">
            <motion.div
              className="mb-3 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Image
                src="/Logo_zweizeilige Unterzeile.png"
                alt="Daily Dose of Content Logo"
                width={200}
                height={80}
                className="h-auto max-w-full"
                priority
              />
            </motion.div>
            
            <motion.h2 
              className="text-lg sm:text-xl font-medium text-brand-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {subtitle}
            </motion.h2>
            
            <motion.p 
              className="text-base text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {description}
            </motion.p>
            
            {/* Mobile Buttons */}
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-brand-primary rounded-xl shadow-lg hover:bg-brand-primary/90 transition-all duration-300"
                >
                  {primaryButton.text}
                </Link>
              )}
              
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-brand-black bg-gray-100 rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300"
                >
                  {secondaryButton.text}
                </Link>
              )}
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
              className="text-3xl md:text-5xl font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              damit Sie es nicht müssen.
            </motion.h2>
          </div>
        </div>
      </motion.div>

    </div>
  )
}