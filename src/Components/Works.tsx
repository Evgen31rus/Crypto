import dowlandPNG from '../img/work/Dowland.png'
import WalletPNG from '../img/work/Wallet.png'
import {FWorkIcon} from './WorkIcon'
import MiningPNG from '../img/work/Mining.png'
import LinePNG from '../img/work/Line.png'
import ComparisonPNG from '../img/work/Comparison.png'
import {FLine} from './Line'
import {motion} from 'framer-motion'


export default function Works(){

    const workIconAnimation ={
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2,}
        })
    }

    const LineAnimation = {
        hidden: {
            // y: -100,
            // x:100,
            scale: -0.5,
            opacity: 0,
        },
        visible: (custom: number) => ({
            // y: 0,
            // x: 0,
            rest: { rotate: 2 },
            hover: { rotate: 360, transition: { duration: 0.4 } },
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2,}
        })
    };

    return(
        <motion.div 
        className={`w-[100%] h-[527px] flex flex-col justify-around  items-center bg-[#15121D] text-white sm:h-[1500px]`}>
<div className={`w-[100%] h-[10%] flex flex-col items-center `}>
<h1 className={`text-[1.8rem] leading-loose font-medium tracking-wider sm:text-center sm:text-[1.5rem] md:text-[1.6rem]`}>How It Works</h1>
<p className={`w-[60%]`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
</div>


<div 

className={`w-[100%] h-[60%] relative sm:flex sm:flex-col sm:h-[100%] sm:items-center sm:justify-around overflow-hidden`}>

<motion.div 
initial={'hidden'}
whileInView={'visible'}
className={`absolute top-[0%] right-[95%] sm:static md:right-[100%] `}
viewport={{amount: 0.2}}>
<FWorkIcon variants={workIconAnimation} custom={1} png={dowlandPNG} title={`Download`} discription={`Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.`} top={'0'} right={'0'}/>

</motion.div>


<motion.div 
initial={'hidden'}
whileInView={'visible'}
className={`absolute right-[70%] top-[30%] sm:static md:right-[80%]`}
viewport={{amount: 0.2}}>
<FWorkIcon variants={workIconAnimation} custom={2} png={WalletPNG} title={`Connect Wallet`} discription={`Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.`} top={'60'} right={'100'}/>
</motion.div>

<motion.div 
initial={'hidden'}
whileInView={'visible'}
className={`absolute right-[47%] sm:static md:right-[55%]`}>
<FWorkIcon variants={workIconAnimation} custom={3} png={MiningPNG} title={`Start Trading`} discription={`Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.`} top={'0'} right={'200'}/>
</motion.div>

<motion.div 
initial={'hidden'}
whileInView={'visible'}
className={`absolute right-[25%] top-[30%] sm:static md:right-[35%]`}>
<FWorkIcon variants={workIconAnimation} custom={4} png={ComparisonPNG} title={`Earn Money`} discription={`Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.`} top={'60'} right={'300'}/>
</motion.div>
</div>


        </motion.div>
    )
}