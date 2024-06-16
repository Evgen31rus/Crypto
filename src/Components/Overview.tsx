import { useState } from 'react'
import CoinsBanner from '../img/CoinsBanner.png'
import {motion} from 'framer-motion'

export default function Overview(){
      
    const [mouseOver, setMouseOver]=useState<boolean>(false)

    const textAnimation = {
        hidden: {
          x:-100,
          opacity: 0,
        },
        visible: (custom:number) => ({
          x: 0 ,
          opacity: 1,
          transition: {delay: custom*0.2}
        }) 
        
    }

    return(
        <motion.div
      initial='hidden'
      whileInView='visible'
        className={`w-[100%] h-[400px] flex flex-col items-center md:h-[500px] sm:h-[800px] `}>
            <div className={`w-[80%] flex max-w-[1200px] justify-between text-white sm:justify-center relative`}>
                <div className={`w-[50%] h-[300px] flex flex-col justify-between sm:w-[100%] sm:items-center md:h-[450px]`}>
                <motion.h1 
                variants={textAnimation}
                custom={1}
                className={` w-[100%] text-start text-white text-[2.3rem] leading-loose font-medium tracking-wider sm:text-center sm:text-[2rem] md:text-[2.0rem]`}>Learn, Buy & Sell Crypto Easily</motion.h1>
                <motion.p 
                variants={textAnimation}
                custom={2}
                className={`text-start text-[0.8rem] sm:text-center`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</motion.p>
                <motion.button
                variants={textAnimation}
                custom={3} className={`${mouseOver? 'icon' : ''} w-[200px] h-[50px] bg-[#EF443B] rounded-xl relative overflow-hidden animate-bounce`}
                onMouseOver={()=>setMouseOver(true)}
                onMouseOut={()=>setMouseOver(false)}
                >Get Started Now</motion.button>
                </div>
            <div className={` rounded-full w-[40%] h-[300px] flex justify-center items-center sm:hidden`}>
                <div className={`coin-Gradient w-[110px] h-[110px] rounded-full`}></div>
           <div className={` absolute w-[300px] h-[300px] top-[5%] bg-cover bg-center bg-no-repeat  `}
            style={{
                backgroundImage: `url('${CoinsBanner}')`
            }}
            >

            </div>
            </div>
            
            </div>
     

        </motion.div>
    )
}