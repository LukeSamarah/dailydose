import Image from 'next/image'

interface ImageTextSectionProps {
  title: string
  content: string
  imagePosition?: 'left' | 'right'
  backgroundColor?: 'white' | 'gray'
  images?: string[]
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
              {images && images.length > 0 ? (
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
                <div className="aspect-square rounded-xl bg-gray-200 flex items-center justify-center">
                  <svg 
                    className="h-16 w-16 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" 
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}