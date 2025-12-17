'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface GrafikenSectionProps {
  title?: string
  backgroundColor?: 'white' | 'gray'
  variant?: 'homepage' | 'services'
}

const grafiken = [
  {
    src: "/GrafikenSection/Herzlich Willkommen.png",
    alt: "Herzlich Willkommen Grafik"
  },
  {
    src: "/GrafikenSection/Noch%20keine%20Geschenkidee%3F.png",
    alt: "Noch keine Geschenkidee Grafik"
  },
  {
    src: "/GrafikenSection/PTNH 1 Jahr Instagram.png",
    alt: "PTNH 1 Jahr Instagram Grafik"
  },
  {
    src: "/GrafikenSection/PTNH 1 jahr instagram story.jpg",
    alt: "PTNH 1 Jahr Instagram Story Grafik"
  },
  {
    src: "/GrafikenSection/Trecker Vorstellung.png",
    alt: "Trecker Vorstellung Grafik"
  },
  {
    src: "/GrafikenSection/Brückner Posts.png",
    alt: "Brückner Posts Grafik"
  },
  {
    src: "/GrafikenSection/Gutschein für Keramik Bemalen.png",
    alt: "Gutschein für Keramik Bemalen Grafik"
  }
]

export default function GrafikenSection({
  title = "Professionelle Grafikerstellung",
  backgroundColor = 'white',
  variant = 'homepage'
}: GrafikenSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % grafiken.length)
    }, 3000) // Wechsel alle 3 Sekunden

    return () => clearInterval(interval)
  }, [])

  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  if (variant === 'services') {
    return (
      <div className={`${bgClass} py-12 sm:py-16`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-canto-bold">
              {title}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg font-muli max-w-3xl mx-auto">
              Von Social Media Posts bis hin zu professionellen Präsentationen - wir erstellen 
              ansprechende Grafiken, die Ihre Marke zum Leben erwecken und Ihre Botschaft 
              wirkungsvoll vermitteln.
            </p>
          </div>

          {/* Mobile: Slideshow */}
          <div className="lg:hidden flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                <div className="flex transition-transform duration-500 ease-in-out h-full" 
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {grafiken.slice(0, 6).map((grafik, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-full flex items-center justify-center bg-white p-4 rounded-lg">
                      <Image
                        src={grafik.src}
                        alt={grafik.alt}
                        width={300}
                        height={300}
                        className="max-w-full max-h-full object-contain object-top"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {grafiken.slice(0, 6).map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? 'bg-[#e88906]' : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                {/* Previous/Next buttons */}
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  onClick={() => setCurrentIndex((prevIndex) => 
                    prevIndex === 0 ? 5 : prevIndex - 1
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  onClick={() => setCurrentIndex((prevIndex) => 
                    (prevIndex + 1) % 6
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Grid (unverändert) */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grafiken.slice(0, 6).map((grafik, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="aspect-square flex items-center justify-center p-4">
                  <Image
                    src={grafik.src}
                    alt={grafik.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e88906] hover:bg-[#d67905] transition-colors duration-200 font-muli"
            >
              Grafiken anfragen
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${bgClass} py-12 sm:py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text links */}
          <div className="flex items-center lg:order-1">
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-canto-bold">
                {title}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 font-muli">
                Von Social Media Posts bis hin zu professionellen Präsentationen - wir erstellen 
                ansprechende Grafiken, die Ihre Marke zum Leben erwecken und Ihre Botschaft 
                wirkungsvoll vermitteln.
              </p>
            </div>
          </div>

          {/* Slideshow rechts */}
          <div className="flex items-center justify-center lg:order-2">
            <div className="w-full max-w-lg relative">
              <div className="relative overflow-hidden rounded-lg" style={{ height: '400px' }}>
                <div className="flex transition-transform duration-500 ease-in-out h-full" 
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {grafiken.map((grafik, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-full flex items-center justify-center">
                      <Image
                        src={grafik.src}
                        alt={grafik.alt}
                        width={500}
                        height={400}
                        className="max-w-full max-h-full object-contain object-top"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {grafiken.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                {/* Previous/Next buttons */}
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  onClick={() => setCurrentIndex((prevIndex) => 
                    prevIndex === 0 ? grafiken.length - 1 : prevIndex - 1
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                  onClick={() => setCurrentIndex((prevIndex) => 
                    (prevIndex + 1) % grafiken.length
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}