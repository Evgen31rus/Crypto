import { motion } from "framer-motion";
import { forwardRef } from "react";

type typeProps = {
    png: string;
    rotate: number;
    top: number;
    right: number;
};

export const Line = forwardRef<HTMLDivElement, typeProps>((props, ref) => {
    const { png, right, rotate, top } = props;



    return (
        <div
            ref={ref}
            className={`absolute w-[150px] h-[54.5px] bg-cover bg-center bg-no-repeat sm:static sm:bg-contain sm:h-[130px] sm:w-[190px]`}
            style={{
                backgroundImage: `url(${png})`,
                transform: `translateX(${window.innerWidth <= 605 ? 0 : right}%) translateY(${window.innerWidth <= 605 ? 0 : top}%) rotate(${window.innerWidth <= 605 ? 109 : rotate}deg)`
            }}
        ></div>
    );
});
export const FLine = motion(Line)