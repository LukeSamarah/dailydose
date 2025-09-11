import Link from 'next/link'

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

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton
}: HeroSectionProps) {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <h2 className="mt-6 text-xl leading-8 text-gray-600 sm:text-2xl font-medium">
            {subtitle}
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors"
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
              >
                {secondaryButton.text} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}