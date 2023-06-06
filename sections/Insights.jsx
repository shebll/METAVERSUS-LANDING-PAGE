'use client';
import { motion } from "framer-motion";
import styles from '@/styles'
import { TypingText ,InsightCard ,TitleText } from "@/components";
import {staggerContainer} from '@/utils/motion'
import { insights } from "@/contest/page";

const Insights = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once :false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight " textStyle="text-center" />
      <TitleText title={<>Insight about metaverse</>}  textStyle="text-center"  />
      <div className="mt-[50px] flex flex-col gap-8">
        {insights.map((insight ,index) =>(
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index = {index+1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
