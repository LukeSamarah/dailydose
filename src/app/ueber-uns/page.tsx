import AboutHeroSection from '@/components/sections/AboutHeroSection'
import TextSection from '@/components/sections/TextSection'
import ImageTextSection from '@/components/sections/ImageTextSection'
import { content } from '@/data/content'

export default function UeberUnsPage() {
  const { hero, sections } = content.ueberUns

  return (
    <>
      <AboutHeroSection 
        title={hero.title}
        content={hero.content}
        image={hero.image}
        imagePosition={hero.imagePosition}
      />
      {sections.map((section, index) => {
        if (section.type === 'text') {
          return (
            <TextSection
              key={index}
              title={section.title}
              content={section.content}
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
              images={section.images}
              button={section.button}
            />
          )
        }
        return null
      })}
    </>
  )
}