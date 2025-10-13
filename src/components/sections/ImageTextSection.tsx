import Image from 'next/image'

interface ImageTextSectionProps {
  title: string
  content: string
  imagePosition?: 'left' | 'right'
  backgroundColor?: 'white' | 'gray'
  images?: string[]
  showVideo?: boolean
  button?: {
    text: string
    href: string
  }
}

export default function ImageTextSection({
  title,
  content,
  imagePosition = 'right',
  backgroundColor = 'white',
  images,
  showVideo = false,
  button
}: ImageTextSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'
  const isImageLeft = imagePosition === 'left'

  return (
    <div className={`${bgClass} py-12 sm:py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className={`lg:pt-4 ${isImageLeft ? 'lg:order-2' : ''}`}>
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-canto-bold">
                {title}
              </h3>
              <div className="mt-6 text-base leading-7 text-gray-600 space-y-4 sm:text-lg sm:leading-8 font-muli">
                {content.split('\n\n').map((paragraph, index) => {
                  // Handle bold text
                  const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                  return (
                    <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                  );
                })}
              </div>
              {button && (
                <div className="mt-8">
                  <a
                    href={button.href}
                    className="inline-flex items-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 transition-colors duration-200"
                  >
                    {button.text}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className={`flex items-center justify-center ${isImageLeft ? 'lg:order-1' : ''}`}>
            <div className="w-full max-w-md">
              {showVideo ? (
                <div className="bg-black p-2 rounded-lg shadow-2xl">
                  <div className="relative overflow-hidden rounded">
                    <video
                      className="w-full h-auto max-w-sm"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/Webm/copy_F189B18E-367C-43A0-A1D9-86F9FCB98831.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              ) : images && images.length > 0 ? (
                images.length === 1 ? (
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={images[0]}
                      alt="Daily Dose of Content"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={image}
                          alt={`Daily Dose of Content ${index + 1}`}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="relative max-w-sm mx-auto">
                  {/* iPhone 15 Pro Mockup im Querformat */}
                  <div className="relative scale-75 md:scale-90">
                    {/* Outer iPhone Frame - Titan Effect */}
                    <div className="relative bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-[60px] p-2 shadow-2xl">
                      {/* Inner Frame - Black Bezel */}
                      <div className="relative bg-black rounded-[52px] p-2 overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-9 bg-black rounded-full z-10"></div>

                        {/* iPhone Screen - passend im Rahmen */}
                        <div className="relative bg-white rounded-[48px] w-[390px] h-[844px] mx-auto overflow-hidden">
                        </div>
                        
                        {/* Side Buttons */}
                        <div className="absolute -left-1 top-20 w-1 h-12 bg-gray-400 rounded-r"></div>
                        <div className="absolute -left-1 top-36 w-1 h-8 bg-gray-400 rounded-r"></div>
                        <div className="absolute -left-1 top-48 w-1 h-8 bg-gray-400 rounded-r"></div>
                        <div className="absolute -right-1 top-32 w-1 h-20 bg-gray-400 rounded-l"></div>
                      </div>
                      
                      {/* Realistic Shadow */}
                      <div className="absolute inset-0 rounded-[55px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}