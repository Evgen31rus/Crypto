export default function BurgerMenu(){
return(
    <div className={`w-50px h-[40px] hidden justify-around relative sm:flex-col sm:flex`} >
    <div className={` w-[50px] h-[2px] bg-[#ffffff] transition-all duration-300 `}></div>
    <div className={` w-[50px] h-[2px] bg-[#ffffff] transition-all duration-150  `}></div>
    <div className={` w-[50px] h-[2px] bg-[#ffffff] transition-all duration-300 `}></div>
    </div>
)
}