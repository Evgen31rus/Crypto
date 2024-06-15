import { motion } from "framer-motion"
import { forwardRef } from "react"

type typeProps = {
    png: string
    title: string
    discription: string
    top: string
    right: string
}

export const WorkIcon = forwardRef<HTMLDivElement, typeProps>((props,ref)=>{
    
const {png, title, discription, top,  right }=props
    return(
        <motion.div ref={ref} className={`absolute w-[250px] h-[160px] flex flex-col justify-between items-center sm:static sm:mt-10 sm:mb-10`}
        style={{
            transform: `translateY(${window.innerWidth<=605? 0 : top}%) translateX(${window.innerWidth<=605? 0 : right}%)`
        }}
        >

<div className={`w-[80px] h-[80px] bg-cover bg-no-repeat bg-center`}
style={{
    backgroundImage: `url('${png}')`
}}
>

</div>

<h3>{title}</h3>
<p className={`w-[61%] text-[0.6rem]`}>{discription}</p>

</motion.div>
    )
})
export const FWorkIcon = motion(WorkIcon)