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
import Cardano from '../img/coins/Cardano.png'
import ShibaInu from '../img/coins/Shiba Inu.png'
import Avalanche from '../img/coins/Avalanche.png'
import WrappedBitcoin from '../img/coins/Wrapped Bitcoin.png'
import TRON from '../img/coins/TRON.png'
import ChainLink from '../img/coins/ChainLink.png'
import BitcoinCash from '../img/coins/Bitcoin Cash.png'
import Polkadot from '../img/coins/Polkadot.png'
import UnisWap from '../img/coins/UnisWap.png'
import NEARProtocol from '../img/coins/NEAR Protocol.png'
import UNUSSEDLEO from '../img/coins/UNUS SED LEO.png'
import Pepe from '../img/coins/Pepe.png'
import EthereumClassic from '../img/coins/Ethereum Classic.png'
import Kaspa from '../img/coins/Kaspa.png'
import WrappedBeaconETH from '../img/coins/Wrapped Beacon ETH.png'
import Monero from '../img/coins/Monero.png'
import FirstDigitalUSD from '../img/coins/First Digital USD.png'
import RenderToken from '../img/coins/Render Token.png'
import Mantle from '../img/coins/Mantle.png'
import Aptos from '../img/coins/Aptos.png'
import Stellar from '../img/coins/Stellar.png'
import Cosmos from '../img/coins/Cosmos.png'
import Stacks from '../img/coins/Stacks.png'
import OKB from '../img/coins/OKB.png'
import Filecoin from '../img/coins/Filecoin.png'
import Immutable from '../img/coins/Immutable.png'
import dogwifhat from '../img/coins/dogwifhat.png'
import Sui from '../img/coins/Sui.png'
import TheGraph from '../img/coins/The Graph.png'
import Maker from '../img/coins/Maker.png'
import InjectiveProtocol from '../img/coins/Injective Protocol.png'
import Notcoin from '../img/coins/Notcoin.png'
import VeChain from '../img/coins/VeChain.png'
import FlokiInu from '../img/coins/Floki Inu.png'
import Bittensor from '../img/coins/Bittensor.png'
import Arweave from '../img/coins/Arweave.png'
import Optimism from '../img/coins/Optimism.png'
import LidoDAO from '../img/coins/Lido DAO.png'
import Fantom from '../img/coins/Fantom.png'
import JasmyCoin from '../img/coins/JasmyCoin.png'
import Ondo from '../img/coins/Ondo.png'
import ThetaToken from '../img/coins/Theta Token.png'
import THORChain from '../img/coins/THORChain.png'
import BitgetToken from '../img/coins/Bitget Token.png'
import Bonk from '../img/coins/Bonk.png'
import Core from '../img/coins/Core.png'
import MaticNetwork from '../img/coins/Matic Network.png'
import TrueUSD from '../img/coins/TrueUSD.png'
import Aave from '../img/coins/Aave.png'
import Pendle from '../img/coins/Pendle.png'
import Fetch from '../img/coins/Fetch.png'
import Algorand from '../img/coins/Algorand.png'
import Brett from '../img/coins/Brett.png'
import Arbitrum from '../img/coins/Arbitrum.png'
import Cheelee from '../img/coins/Cheelee.png'
import Flow from '../img/coins/Flow.png'
import Sei from '../img/coins/Sei.png'
import Ethena from '../img/coins/Ethena.png'
import MarinadestakedSOL from '../img/coins/Marinade staked SOL.png'
import Litecoin from '../img/coins/Litecoin.png'
import {motion} from 'framer-motion'


const array = [Bitcoin, Ethereum, BinanceCoin, Tether, Solana, StakedEther, USDCoin, TONCoin, XRP, Dogecoin, Cardano, ShibaInu, Avalanche, WrappedBitcoin, TRON, ChainLink, BitcoinCash, Polkadot, UnisWap, NEARProtocol, Litecoin, UNUSSEDLEO, Pepe, EthereumClassic, Kaspa, WrappedBeaconETH, Monero, FirstDigitalUSD, RenderToken, Mantle, Aptos, Stellar, Cosmos, Stacks, OKB, Filecoin, Immutable, dogwifhat, Sui, TheGraph, Maker, InjectiveProtocol, Notcoin, VeChain, FlokiInu, Bittensor, Arweave, Optimism, LidoDAO, Fantom, JasmyCoin, Ondo, ThetaToken, THORChain, BitgetToken, Bonk, Core, MaticNetwork, TrueUSD, Aave, Pendle, Fetch, Algorand, Brett, Arbitrum, Cheelee, Flow, Sei, Ethena, MarinadestakedSOL   ]
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
          x:-100,
          opacity: 0,
        },
        visible: (custom:number) => ({
          x: 0 ,
          opacity: 1,
          transition: {delay: custom*0.2}
        }) 
        
    }
    const btnAnimationNext = {
        hidden: {
          x:100,
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
        <div className={`w-[90%] h-[80%] max-w-[1200px] transition-all duration-300 sm:w-[100%]`}>



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


<motion.div 
        initial='hidden'
        whileInView='visible'
        className={`w-[100%] h-[100px] flex items-center justify-center`}>
<motion.button 
variants={btnAnimationBack}
custom={1}
className={`icon relative overflow-hidden w-[150px] h-[30px] border-[2px] rounded-full border-[#EF443B] flex justify-center items-center ml-5 ${(switchPage.min)===0? 'bg-[grey] opacity-50 hover:bg-[grey] border-[grey]' : ''} transition-all duration-300 hover:bg-[#EF443B] `}
onClick = {()=>HandleSwitchCoinsBack()}
disabled={switchPage.min === 0}
>
back
</motion.button>
<motion.button 
variants={btnAnimationNext}
custom={1}
className={`icon relative overflow-hidden w-[150px] h-[30px] border-[2px] rounded-full border-[#EF443B] flex justify-center items-center ml-5 ${(switchPage.max)===10*(data.length/10-3)? 'bg-[grey] opacity-50 hover:bg-[grey] border-[grey]' : ''} transition-all duration-300 hover:bg-[#EF443B]`}
onClick = {()=>HandleSwitchCoinsNext()}
disabled={(switchPage.max)>=10*(data.length/10-3)}
>
next 
</motion.button>
</motion.div>

        </div>
    )
}