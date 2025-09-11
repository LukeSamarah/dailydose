import TextSection from '@/components/sections/TextSection'
import { content } from '@/data/content'

export default function ReferenzenPage() {
  return (
    <TextSection
      title={content.referenzen.title}
      content={content.referenzen.content}
      centered={true}
    />
  )
}