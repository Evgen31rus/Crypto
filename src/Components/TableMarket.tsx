import React from 'react'
import RowTable from "./RowTable";
import { ICryptoCurrency } from "../interface/ICryptoCurrency";
import { useState } from "react";
import {MouseEvent} from 'react'
import {CSSTransition} from 'react-transition-group'
import Bitcoin from '../img/coins/logos_bitcoin.png'
import Ethereum from '../img/coins/Ethereum.png'
import BinanceCoin from '../img/coins/Binance Coin.png'
import Tether from '../img/coins/Tether.png'
import Solana from '../img/coins/Solana.png'
import StakedEther from '../img/coins/Staked Ether.png'
import USDCoin from '../img/coins/USD Coin.png'
import TONCoin from '../img/coins/TON Coin.png'
import XRP from '../img/coins/XRP.png'
import Dogecoin from '../img/coins/Dogecoin.png'
import {motion} from 'framer-motion'


const array = [Bitcoin, Ethereum, BinanceCoin, Tether, Solana, StakedEther, USDCoin, TONCoin, XRP, Dogecoin  ]
type typeProps =  {
    data:  ICryptoCurrency[]
}

export default function TableMarket({data}:typeProps){
    const [trigger, setTrigger] = useState(false) 
    const [switchPage, setSwitchPage] = useState({ 
        min: 0, 
        max: 10 
    }) 
    
    const btnAnimationBack = {
        hidden: {
          x:-500,
          opacity: 0,
        },
        visible: (custom:number) => ({
          x: 0 ,
          opacity: 1,
          transition: {delay: custom*0.2}
        }) 
        
    }
    
    const HandleSwitchCoinsBack = ()=>{
   
        setSwitchPage(prev => ({ 
            ...prev, 
            min: prev.min - 10 ,
            max: prev.max - 10 
        }))
        setTrigger(!trigger)
        setTrigger(!trigger)
        

    }

    const HandleSwitchCoinsNext = () => { 
        setSwitchPage(prev => ({ 
            ...prev, 
            min: prev.min + 10 ,
            max: prev.max + 10 
        })); 
        setTrigger(!trigger)
        setTrigger(!trigger)

    }



    return(
        <motion.div 
        initial='hidden'
        whileInView='visible'

        className={`w-[90%] h-[80%] max-w-[1200px] transition-all duration-300 sm:w-[100%]`}>



<div className={`w-[100%] h-[47px] flex items-center border-b-2  sm:justify-around sm:text-[0.7rem]`}>

        <div className={`w-[5%] text-center sm:hidden`}></div>
        <div className={`w-[10%] `}>#</div>
        <div className={`w-[20%] text-start pl-[40px] sm:p-0`}>name</div>
        <div className={`w-[20%]`}>Last Price</div>
        <div className={`w-[10%] `}>24h %</div>
        <div className={`w-[20%] sm:hidden`}>Market Cap</div>
        <div className={`w-[25%] sm:hidden`}>Last 7 Days</div>
        <div className={`w-[10%] `}></div>


</div>




<CSSTransition in={trigger} timeout={300} classNames={`alert`}>
<div>
{
   data.length? 
   
   data?.map((el,i)=>(i>=switchPage.min&&i<switchPage.max? 
   <RowTable img={array[i]} data={el} index={i}/> 
 
   
   : null))
   :
   <div>ошибка</div>
}
</div>
</CSSTransition>


<div className={`w-[100%] h-[100px] flex items-center justify-center`}>
<motion.button 
variants={btnAnimationBack}
custom={1}
className={`icon relative overflow-hidden w-[150px] h-[30px] border-[2px] rounded-full border-[#EF443B] flex justify-center items-center ml-5 ${(switchPage.min)===0? 'bg-[grey] opacity-50 hover:bg-[grey] border-[grey]' : ''} transition-all duration-300 hover:bg-[#EF443B] `}
onClick = {()=>HandleSwitchCoinsBack()}
disabled={switchPage.min === 0}
>
back
</motion.button>
<button className={`icon relative overflow-hidden w-[150px] h-[30px] border-[2px] rounded-full border-[#EF443B] flex justify-center items-center ml-5 ${(switchPage.max)===10*(data.length/10)? 'bg-[grey] opacity-50 hover:bg-[grey] border-[grey]' : ''} transition-all duration-300 hover:bg-[#EF443B]`}
onClick = {()=>HandleSwitchCoinsNext()}
disabled={(switchPage.max)>=10*(data.length/10)}
>
next 
</button>
</div>

        </motion.div>
    )
}