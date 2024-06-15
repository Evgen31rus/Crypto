import { HandySvg } from "handy-svg";
import svg from '../svg/Provide/Provide.svg'
import png from '../img/Provide/Laptop.png'
import { motion } from "framer-motion";

export default function Provide(){

    const lefElements = {
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
        initial={'hidden'}
whileInView={'visible'}
viewport={{amount: 0.2}}
        className={`w-[100%] h-[400px] text-white flex justify-around items-center sm:flex-col sm:h-[500px] `}>

<div className={`w-[40%] h-[50%] flex-col sm:w-[90%] sm:h-[50%] `}>
<motion.h3 variants={lefElements} custom={1} className={`text-start font-medium mb-10 h-[30px] text-[2.0rem]`}>What We Provide</motion.h3>
<motion.p variants={lefElements} custom={2} className={`text-[0.8rem] text-start mb-5 sm:text-[0.7rem]`}>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</motion.p>
<div className={`flex w-[100%] flex-col relative mb-5`}>
<motion.div 
    variants={lefElements} 
    custom={3}
    className={`flex items-center h-[30px] justify-between  w-[60%] sm:w-[78%]`}>
    <div className={`w-[15px] h-[15px] bg-[green] rounded-full flex justify-between items-center `}><HandySvg src={svg}/></div>
    <p className={` flex mb-2 text-start text-[0.8rem] font-medium `}>View real-time cryptocurrency prices</p>
    </motion.div>

    <motion.p     
    variants={lefElements} 
    custom={4} 
    className={`w-[80%] text-[0.6rem] text-start sm:w-[100%]`}>Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.</motion.p>
    
    </div>


<div className={`flex w-[100%] flex-col`}>
    
<motion.div 
    variants={lefElements} 
    custom={5}
    className={`flex items-center h-[30px] justify-between w-[60%] sm:w-[78%]`}>
    <div className={`w-[15px] h-[15px] bg-[green] rounded-full flex justify-center items-center `}><HandySvg src={svg}/></div>
    <p className={` flex mb-2 text-start text-[0.8rem] font-medium `}>Buy and sell BTC, ETH, XRP, OKB, Etc...</p>
    </motion.div>

    <motion.p 
    variants={lefElements} 
    custom={6}
    className={`w-[80%] text-[0.6rem] text-start sm:w-[100%] sm:mt-2`}>Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.</motion.p>
</div>

<motion.button 
variants={lefElements} 
custom={7}
className={`icon relative overflow-hidden mt-10 w-[150px] h-[40px] rounded-xl border-[2px] border-[#EF443B] flex justify-center items-center`}>Explore More</motion.button>
</div>

<div>

</div>

<div className={`w-[40%] h-[70%] flex justify-center items-center relative sm:hidden`}>
<div className={`w-[500px] h-[360px] absolute bg-cover bg-center bg-no-repeat top-[-50%] sm:hidden md:w-[300px] h-[]`}
style={{
    backgroundImage: `url('${png}')`,
    transform: `translateY(50%)`
}}
>

</div>
</div>

        </motion.div>
    )
}