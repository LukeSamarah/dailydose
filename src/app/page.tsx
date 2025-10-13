import HeroSection from '@/components/sections/HeroSection'
import TextSection from '@/components/sections/TextSection'
import ImageTextSection from '@/components/sections/ImageTextSection'
import VideoSection from '@/components/sections/VideoSection'
import { content } from '@/data/content'

export default function Home() {
  const { hero, sections } = content.home

  return (
    <>
      <HeroSection {...hero} />
      {sections.map((section, index) => {
        if (section.type === 'text') {
          return (
            <TextSection
              key={index}
              title={section.title}
              content={section.content}
              centered={section.centered}
              backgroundColor={section.backgroundColor}
            />
          )
        }
        if (section.type === 'imageText') {
          return (
            <ImageTextSection
              key={index}
              title={section.title}
              content={section.content}
              imagePosition={section.imagePosition}
              backgroundColor={section.backgroundColor}
            />
          )
        }
        if (section.type === 'customVideo') {
          return (
            <VideoSection
              key={index}
              title={section.title}
              content={section.content}
              backgroundColor={section.backgroundColor}
            />
          )
        }
        return null
      })}
    </>
  )
}
