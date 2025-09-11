// 'use client'

// import { useEffect, useRef, useState } from 'react'

// interface ProcessStep {
//   id: number
//   title: string
//   description: string
//   icon: string
//   color: string
//   details: string
// }

// interface ProcessTimelineProps {
//   title: string
//   subtitle: string
//   steps: ProcessStep[]
// }

// OLD TIMELINE VERSION - COMMENTED OUT
// export default function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {

'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: string
  color: string
  details: string
}

interface ProcessTimelineProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export default function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Calculate positions for 5 steps in a circle
  const getStepPosition = (index: number) => {
    const angle = (index * 72) - 90 // 360/5 = 72 degrees, -90 to start at top
    const radius = 320 // Distance from center - INCREASED
    const x = Math.cos(angle * Math.PI / 180) * radius
    const y = Math.sin(angle * Math.PI / 180) * radius
    return { x, y, angle }
  }

  return (
    <div ref={containerRef} className="py-12 bg-gradient-to-br from-white via-brand-tertiary/20 to-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-brand-secondary/15 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Horizontal Cards Layout */}
        <div className="relative py-20">
          
          {/* Top border line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
          
          {/* Bottom border line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>

          <div className="flex justify-center items-start gap-6 w-full px-4">
            {steps.map((step, index) => {
              const isHovered = hoveredStep === index
              
              return (
                <div
                  key={step.id}
                  className={`transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-16 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                
                  {/* Step Content Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-72 ${
                    isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
                  }`}>
                  
                  {/* Step Circle - Now integrated in card */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-lg mr-4 relative">
                      <span className="filter drop-shadow-md">
                        {step.icon}
                      </span>
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-xs font-bold text-brand-primary">
                        {step.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-black leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {step.details.split(' • ').slice(0, 2).map((detail, i) => (
                        <span 
                          key={i}
                          className="inline-block bg-brand-tertiary text-xs text-brand-black px-3 py-1 rounded-full"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}