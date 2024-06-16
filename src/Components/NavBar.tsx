import accountSVG from '../svg/nav/account.svg'
import { HandySvg } from 'handy-svg'
import BurgerMenu from './BurgerMenu'

export default function NavBar(){
    return(
        <div className={`w-[80%] max-w-[1200px] h-[80px] flex justify-between bg-[#141414] text-white items-center fixed z-50 sm:w-[100%] sm:pl-10`}>
<BurgerMenu/>
<div className={`w-[40%] text-[0.8rem] md:w-[70%] sm:hidden`}>
<ul className={`w-[100%] flex justify-around`}>
    <li>Logo</li>
    <li><a href="">Buy & Sell</a></li>
    <li><a href="#Market">Markets</a></li>
    <li><a href="">Blogs</a></li>
    <li><a href="">Markets</a></li>
    <li><a href="">FAQ</a></li>
</ul>
</div>
<div className={`flex w-[30%] justify-between items-center md:justify-around sm:hidden`}>
<ul className={`w-[50%] flex justify-around items-center text-[0.8rem] md:hidden`}>
<li>Assets</li>
<li>Trades</li>
</ul>
<button className={`icon text-[0.8rem] relative overflow-hidden border-[2px] border-[#EF443B] w-[70px] transition-all duration-300 rounded-xl h-[35px] hover:bg-[#EF443B] `}>Sign in</button>
<div className={`cursor-pointer w-[50px] h-[50px] flex justify-center itrms-center rounded-full bg-[#FF6F00] sm:hidden`}>
<HandySvg src={accountSVG} className={`w-[60%] h-[100%]`}/>
</div>
</div>
<div>

</div>
        </div>
    )
}