'use client';
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn ,staggerContainer ,zoomIn} from "@/utils/motion";
import {TypingText ,TitleText } from '@/components'
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once :false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right",'tween',0.2 ,1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-white border-[1px] relative"
      >
        <div className="feedback-gradient"/>
        <div className="">
          <h4 className="font-bold leading-[26px] sm:leading-[40px] text-[26px] sm:text-[36px]  text-white">
            Samantha 
          </h4>
          <p className="text-white mt-[8px] font-normal text-[12px] sm:text-[22px] leading-[16px] sm:leading-[40px] ">
            Founder | Metaverus
          </p>
        </div>
        <p className="text-secondary-white mt-[26px] font-normal text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px]">
          “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("right",'tween',0.2 ,1)}
        className="flex-1 flex justify-end item-center relative"
      >
        <img
          src="/planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto object-cover rounded-[40px] min-h-[210px]" />
          <motion.div
            variants={zoomIn(0.4,1)}
            className="absolute hidden lg:block -left-[10%] top-[3%]"
          >
            <img src="/stamp.png" alt="stamp" className=" object-contain w-[200px]" />
          </motion.div>
      </motion.div>
    </motion.div>    
    
  </section>
);

export default Feedback;
