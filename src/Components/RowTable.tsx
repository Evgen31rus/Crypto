import { ICryptoCurrency } from "../interface/ICryptoCurrency";
import { HandySvg } from "handy-svg";
import star from "../svg/market/star.svg";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

type typeProps = {
  data: ICryptoCurrency;
  index: number;
  img?: string;
};
export default function RowTable({ data, index, img }: typeProps) {
  Chart.register(...registerables);
  const dataLine = {
    
        labels: ["", "", ""],
        datasets: [
          {
            label: "",
            data: [
              data.percent_change_1h,
              data.percent_change_24h,
              data.percent_change_7d,
            ],
            fill: true,
            backgroundColor: `rgba(${
              Math.sign(Number(data.percent_change_24h)) == -1
                ? "239,68,59, 0.5"
                : "88,189,125, 0.5"
            })`,
            borderColor: `${
              Math.sign(Number(data.percent_change_24h)) == -1
                ? "#EF443B"
                : "#58BD7D"
            }`,
            tension: 1.2,
            showLine: true,
          },
        ],
      
  }
  

  return (
    <div
      className={`w-[100%] h-[50px] text-[0.8rem] flex items-center border-b-2 border-[#E0E0E0] sm:justify-around sm:text-[0.7rem]`}
    >
      <div className={`w-[5%] flex justify-center sm:hidden`}>
        <HandySvg
          src={star}
          fill={`141414`}
          className={`w-[20px] cursor-pointer `}
        />{" "}
      </div>
      <div className={`w-[10%] `}>{index + 1}</div>
      <div className={`w-[20%]  flex items-center `}>
        <img src={img} alt={data.name} className={`mr-5 w-[20px] h-[20px]`} />
        <p className={`sm:hidden`}>{data.name}</p>
        <p className={`hidden sm:flex`}>{data.symbol}</p>
      </div>
      <div className={`w-[20%]`}>{data.price_usd}</div>
      <div
        className={`w-[10%] ${
          Math.sign(Number(data.percent_change_24h)) == -1
            ? "text-[#EF443B]"
            : "text-[#58BD7D]"
        }`}
      >
        {data.percent_change_24h}
        <span>%</span>
      </div>
      <div className={`w-[20%] sm:hidden`}>
        <span>$</span>
        {data.market_cap_usd}
      </div>
      <div className={`w-[25%] sm:hidden relative`}>
        <Line className={`w-[80%] h-[80%]`} data={dataLine} options={{
    elements: {
      point: {
        radius: 0, // скрыть точки на линии
      },
      line: {
        tension: 0.5, // Натяжение кривой линии
      },
    },
    maintainAspectRatio: false, // не сохранять соотношение сторон
    responsive: true,
    plugins: {
      legend: {
        display: false, // скрыть легенду
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 30,
        bottom: 20,
      },
    },
    scales: {
      x: {
        display: false,
        position: "left", // расположить ось X внизу
      },
      y: {
        position: "bottom",
        display: false,
        beginAtZero: true, // начать ось Y с 0
      },
    },
  }
}
        />
      </div>
      <div className={`w-[10%]`}>
        <button
          className={`flex justify-center items-center w-[60px] h-[25px] rounded-2xl border-[#EF443B] border-[1px] transition-all duration-300  hover:bg-[#EF443B] hover:text-[white] sm:text-[0.5rem] sm:w-[30px] sm:h-[15px]`}
        >
          Trade
        </button>
      </div>
    </div>
  );
}
