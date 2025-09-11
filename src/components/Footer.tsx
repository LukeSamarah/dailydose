import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dienstleistungen', href: '/dienstleistungen' },
  { name: 'Prozess', href: '/prozess' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-tertiary to-brand-secondary shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Logo & Brand Section */}
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="block">
              <Image
                src="/Logo_einzeilige Unterzeile.png"
                alt="Daily Dose of Content Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-lg text-brand-black/80 leading-relaxed max-w-sm">
              Professionelle Social Media Betreuung für mittelständische Unternehmen. 
              Wir schaffen Sichtbarkeit und authentische Verbindungen.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-6">Navigation</h3>
                <ul role="list" className="space-y-4">
                  {navigation.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-brand-black/70 hover:text-brand-primary transition-colors duration-200 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-brand-black mb-6">Mehr</h3>
                <ul role="list" className="space-y-4">
                  {navigation.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-brand-black/70 hover:text-brand-primary transition-colors duration-200 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-black mb-6">Kontakt</h3>
                <ul role="list" className="space-y-4">
                  <li>
                    <a 
                      href="mailto:info@dailydoseofcontent.de"
                      className="text-base text-brand-black/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      info@dailydoseofcontent.de
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+491234567890"
                      className="text-base text-brand-black/70 hover:text-brand-primary transition-colors duration-200"
                    >
                      +49 123 456 789
                    </a>
                  </li>
                  <li className="pt-2">
                    <span className="text-sm text-brand-black/60">
                      Montag - Freitag: 9:00 - 18:00 Uhr
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-secondary/40">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-brand-black/60">
              &copy; {new Date().getFullYear()} Daily Dose of Content. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/datenschutz" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                Impressum
              </Link>
              <Link href="/agb" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}