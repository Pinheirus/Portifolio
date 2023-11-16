import { Variants, motion, useAnimation } from "framer-motion"
import { useInterval } from "../../../hooks/useInterval"
import { Fragment, useState } from "react"
import AnimatedText from "./index"

export function AnimeTextContainer() {
    const variants: Variants = {
        visible: {
          transition: {
            staggerChildren: 0.06
          }
        }
      }
      const [index, setIndex] = useState(0)
      const controls = useAnimation()

      const services = [
        "Desenvolvedor Front-End",
        "Ui/Ux Designer",
      ]

      useInterval({callback: async () => {
        await controls.start({
          y: '-10%',
          opacity: 0,
          transition: {
            ease: 'easeOut'
          }
        })
        setIndex((prevState) => (prevState + 1) % services.length)
        await controls.start({
          y: 0,
          opacity: 1,
          transition: {
            ease: 'easeIn'
          }
        })
      }, delay: 3000})



      return(
        <motion.div animate={controls}>
        <div style={{ overflow: 'hidden' }}>
          {services.map((_problem, currIndex) => (
            <Fragment key={currIndex}>
              {index === currIndex && (
                <motion.div {...{ variants }} animate="visible" initial="hidden">
                  <AnimatedText text={services[index]} />
                </motion.div>
              )}
            </Fragment>
          ))}
        </div>
      </motion.div>
      )
}