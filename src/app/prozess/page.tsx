import ProcessTimeline from '@/components/sections/ProcessTimeline'
import CTASection from '@/components/sections/CTASection'
import { content } from '@/data/content'

export default function ProzessPage() {
  return (
    <>
      <ProcessTimeline
        title={content.prozess.title}
        subtitle={content.prozess.subtitle}
        steps={content.prozess.steps}
      />
      <CTASection
        subtitle="Individualität steht bei uns im Vordergrund"
        text="Bei individuellen Fragen/Wünschen, melden Sie sich gerne direkt per Mail über das Kontakt Formular"
      />
    </>
  )
}