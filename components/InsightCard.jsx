'use client';
import { motion } from "framer-motion";
import styles from '@/styles'
import {fadeIn} from '@/utils/motion'

const InsightCard = ({imgUrl,title,subtitle,index}) => (
  <motion.div
    variants={fadeIn("up","spring",index*0.4 ,1)}
    className="flex flex-col md:flex-row gap-8 justify-between items-center"
  >
    <img
      src={imgUrl}
      alt="img"
      className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover"  />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">{title}</h4>
        <p className="text-gray-400 mt-4 text-[14px] lg:text-[20px]">{subtitle}</p>
      </div>
    </div>  
    <div className="lg:flex hidden items-center justify-center w-[147px] h-[100px] rounded-full bg-transparent border-2 border-white">
      <img src="arrow.svg"
      className="object-contain"/>
    </div>
  </motion.div>
);

export default InsightCard;
