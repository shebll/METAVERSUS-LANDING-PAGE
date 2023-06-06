'use client';
import { motion } from "framer-motion";
import {fadeIn , staggerContainer ,textContainer, textVariant, textVariant2 } from '@/utils/motion'


export const TypingText = ({title ,textStyle}) => (
  <motion.p 
  variants={textContainer}
  className={`font-semibold text-[18px] text-secondary-white ${textStyle}`}
  >
    {Array.from(title).map((l,index)=>(
      <motion.span 
      variants={textVariant2}
      key={index}>
        {l === ' ' ? '\u00A0' : l}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title ,textStyle}) => (
  <motion.h2
  variants={textVariant2}
  initial= "hidden"
  whileInView="show"
  className={`font-bold mt-[8px] text-[40px]  md:text-[64px] text-white ${textStyle}`}
  > 
  {title}
  </motion.h2>
);
