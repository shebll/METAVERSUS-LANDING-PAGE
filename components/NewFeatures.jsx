import styles from '@/styles'
const NewFeatures = ({number ,text1,text2}) => (
  <div className={`flex flex-col flex-1 item-start gap-3`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>
    <p className='flex-1 font-bold  text-[18px] 
    text-[#ffffff] leading-6'>
      {text1}
    </p>
    <p className='flex-1 font-normal text-[18px] 
    text-[#B0B0B0] leading-6'>
      {text2}
    </p>
  </div>
);

export default NewFeatures;
