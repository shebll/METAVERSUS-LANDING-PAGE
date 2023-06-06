'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText ,ExploreCard ,TitleText } from "@/components";
import {staggerContainer } from '@/utils/motion'
import { exploreWorlds } from "@/contest/page";
import styles from '@/styles'
const Explore = () => {
  let random =Math.ceil(Math.random()*exploreWorlds.length)
  console.log(random);

  const [active, setActive] = useState(`world-2`)

  return(
  <section  className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title='|The World' textStyle='text-center' /> 
      <TitleText title={<>Choose the world you want <br className="hidden md:block "/></>} textStyle='text-center' />
      <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
        {exploreWorlds.map((world ,index)=>(
          <ExploreCard
            index={index}
            {...world}
            key={world.id}
            active={active}
            handleClick ={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>
  )
};

export default Explore;
