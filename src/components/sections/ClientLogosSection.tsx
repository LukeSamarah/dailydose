interface ClientLogosSectionProps {
  title: string
  backgroundColor?: 'white' | 'gray'
}

const clientLogos = [
  { name: "ISOTEC", src: "/Referenzen/Logos/Logo-ISOTEC_cmyk-coated 1.png" },
  { name: "Almdorfbau", src: "/Referenzen/Logos/Logo_Almdorfbau_Subline.png" },
  { name: "Sprügel", src: "/Referenzen/Logos/Sprügel.png" },
  { name: "JR Consulting", src: "/Referenzen/Logos/JR-LOGO.png" },
  { name: "Eifeltrecker", src: "/Referenzen/Logos/Eifelfrecker_Logo_Quadrat_Facebook.svg"}
]

export default function ClientLogosSection({
  title,
  backgroundColor = 'white'
}: ClientLogosSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`${bgClass} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-canto-bold">
            {title}
          </h2>
        </div>
        
        {/* Static Client Logos Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-5xl">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className="flex justify-center"
              >
                <div className={`h-20 w-full rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  client.src 
                    ? 'bg-transparent' 
                    : 'bg-gray-100 border border-gray-200 hover:border-[#e88906]/20'
                }`}>
                  {client.src ? (
                    <img 
                      src={client.src} 
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-gray-400 font-semibold text-sm">
                      {client.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}