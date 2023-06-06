'use client';
import { motion } from "framer-motion";
import styles from '@/styles'
import { TypingText ,NewFeatures ,TitleText } from "@/components";
import {staggerContainer ,fadeIn, planetVariants} from '@/utils/motion'
import { newFeatures } from "@/contest/page";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once :false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8 `}
    >
      <motion.div
        variants={fadeIn("right","tween",0.2,1)}
        className={`${styles.innerWidth} flex-[0.75] flex justify-center flex-col`}
      >
        <TypingText title='| What Is New '  />
        <TitleText title={<>Get All The New Now </>}  /> 
        <div
          className="mt-[31px] flex flex-row max-w-[370px] justify-start items-start gap-6">
            {newFeatures.map((feature ,index) =>(
              <NewFeatures 
                key={feature.imgUrl}
                number={index+1}
                text1={feature.title}
                text2={feature.subtitle}
              />
            ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1 `}
      >
        <img src="/whats-new.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
