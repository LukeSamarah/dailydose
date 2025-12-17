import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Daily Dose of Content für professionelle Social Media Betreuung in Mönchengladbach. Amelie Klein - Tel: +49 157 58774195 | E-Mail: klein@dailydoseofcontent.de',
  openGraph: {
    title: 'Kontakt - Daily Dose of Content',
    description: 'Kontaktieren Sie uns für professionelle Social Media Betreuung in Mönchengladbach. Amelie Klein - Ihr Partner für Content-Erstellung und Videoproduktion.',
    url: 'https://dailydoseofcontent.de/kontakt',
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}