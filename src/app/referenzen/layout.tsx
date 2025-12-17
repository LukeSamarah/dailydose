import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referenzen',
  description: 'Erfolgreiche Social Media Projekte von Daily Dose of Content. Sehen Sie unsere Referenzen und Erfolgsgeschichten aus Mönchengladbach und Umgebung.',
  openGraph: {
    title: 'Referenzen - Daily Dose of Content',
    description: 'Entdecken Sie unsere erfolgreichen Social Media Projekte und Referenzen. Von kleinen Startups bis zu etablierten Unternehmen.',
    url: 'https://dailydoseofcontent.de/referenzen',
  },
}

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}