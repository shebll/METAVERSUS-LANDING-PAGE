'use client';
import { motion } from "framer-motion";
import {slideIn , staggerContainer , textVariant} from '@/utils/motion'
import styles from '@/styles'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once :false , amount:0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
          variants={textVariant(0.5)}
          className={`${styles.heroHeading}`}
        >
          METAVERSE
        </motion.h1>
        <motion.div 
          variants={textVariant(1)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}> Ma</h1>
          <h1 className={`${styles.heroDText}`}></h1>
          <h1 className={`${styles.heroHeading}`}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right','tween',0.2,0.8)}
        className='w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px] overflow-hidden" />
        <img 
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10 relative"  />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[30px] pr-[40px] relative z-20">
              <img src="/stamp.png" alt="" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
            </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
