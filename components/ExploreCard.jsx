'use client';
import { motion } from "framer-motion";
import {fadeIn} from '@/utils/motion'
import styles from '@/styles'

const ExploreCard = ({active ,index ,id,imgUrl , title ,handleClick}) => (
  
  <motion.div
    variants={fadeIn('right','spring',index * 0.5 , .6)}
    className={` relative ${
      active == id? 
        'lg:flex-[3.5] flex-[10]' :
        'lg:flex-[0.5] flex-[2]'
    } flex justify-center items-center min-w-[170px]
      h-[700px] transition-[flex] duration-700 ease-out-flex cursor-pointer`}
      onClick={ ()=> handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]" />
    {active !==id ? (
      <h3 className='font-semibold text-white absolute text-[20px] sm:text-[26px] z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
        {title}
      </h3>
    ) : (
      <div className="flex absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.4)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] `}>
          <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2  object-contain" />
        </div>
        <p className="font-normal leading-5 text-[16px] uppercase text-white">
          Enter the Meteverse
        </p>
        <h2 className="font-bold mt-[24px] sm:text-[32px] text-[24px]  uppercase text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
