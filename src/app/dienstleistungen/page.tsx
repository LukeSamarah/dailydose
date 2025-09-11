import ServiceCards from '@/components/sections/ServiceCards'
import { content } from '@/data/content'

export default function DienstleistungenPage() {
  return (
    <ServiceCards services={content.dienstleistungen.services} />
  )
}