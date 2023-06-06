'use client';
import { motion } from "framer-motion";
import styles from '@/styles'
import { TypingText  ,TitleText } from "@/components";
import {staggerContainer ,fadeIn,} from '@/utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once :false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyle="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in tha same world </>} textStyle="text-center" />
      <motion.div 
        variants={fadeIn("up","tween",0.3,1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain" />
        <div className="absolute bottom-64 right-20 w-[40px] md:w-[70px] p-[6px] rounded-full bg-[#5d6680] md:right-20 md:bottom-20">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full object-contain" />
          <div className="z-[-1] blur-lg absolute bg-orange-300 w-full h-full top-0 left-0 " />  
        </div>
        <div className="absolute top-44 left-20 w-[40px] md:w-[70px] p-[6px] rounded-full bg-[#5d6680] md:top-10 md:left-20 ">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full object-contain" />
          <div className="z-[-1] blur-lg absolute bg-gray-300 w-full h-full top-0 left-0 " />    
        </div>
        <div className="absolute top-1/2 left-[30%] w-[40px] md:w-[70px] p-[6px] rounded-full bg-[#5d6680] md:top-1/2 md:left-[45%]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full object-contain" />
          <div className="z-[-1] blur-lg absolute bg-blue-400 w-full h-full top-0 left-0 " />  
        </div>
        <div className="absolute top-20 left-[50%] translate-x-[-50%] md:top-1/3 md:left-[25%] p-[6px] rounded-3xl bg-[#5d6680] ">
          <img
            src="/planet-05.png"
            alt="planet"
            className="w-40 h-full object-contain rounded-3xl " />
          <h2 className="w-fit absolute text-white font-semibold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px]"> Join This</h2>
          <div className="z-[-1] blur-lg absolute bg-green-400 w-full h-full top-0 left-0 " />
        </div>
        <div className="hidden md:block absolute top-1/3 right-[15%]  p-[6px] rounded-3xl bg-[#5d6680] z-10">
          <img
            src="/planet-06.png"
            alt="planet"
            className="w-48 h-full object-contain rounded-3xl " />
          <div className=" absolute flex flex-col gap-2 bottom-[16px] left-6">
            <div className="flex gap-1 items-center justify-center ">
              <div className="flex flex-row ">
                <img
                src="/people-01.png"
                alt="people"
                className="w-6 h-full object-contain rounded-3xl " />
                <img
                src="/people-03.png"
                alt="people"
                className="w-6 h-full -ml-2 object-contain rounded-3xl " />
                <img
                src="/people-02.png"
                alt="people"
                className="w-6 h-full -ml-2  object-contain rounded-3xl " />
              </div>
              <p className="text-gray-400 text-[14px]"> +290 has joined</p>
            </div>
            <h2 className="text-white font-semibold"> The Upside Down</h2>
          </div>
          <div className="z-[-1] blur-lg absolute bg-blue-400 w-full h-full top-0 left-0 " />
        </div>
      </motion.div>
    </motion.div>    
  </section>
);

export default World;
