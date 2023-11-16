import { motion, Variants } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'
import { AnimeContainer } from './styles'


interface AnimatedTextProps {
  text: string
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <span>{children}</span>
}

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const variants: Variants = {
    hidden: {
      y: '200%',
      color: '#04FFC4',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: '#04FFC4',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  }

  const splitWords = text.split(' ')
  const words: string[][] = []
  splitWords.forEach((w) => {
    words.push(w.split(''))
  })
  words.map((word) => {
    return word.push('\u00A0')
  })

  return (
    <AnimeContainer>
      {words.map((_word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <div
                  key={index}
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block'
                  }}
                >
                  <motion.span style={{ display: 'inline-block' }} {...{ variants }}>
                    {element}
                  </motion.span>
                </div>
              )
            })}
          </Wrapper>
        )
      })}
    </AnimeContainer>
  )
}

export default AnimatedText