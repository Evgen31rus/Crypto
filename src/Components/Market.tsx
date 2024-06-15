import { useEffect, useState } from "react";
import { ICryptoCurrency } from "../interface/ICryptoCurrency";
import axios from 'axios';
import TableMarket from "./TableMarket";

export default function Market() {
    const API: string = 'https://api.coinlore.net/api/tickers/';
    const [response, setResponse] = useState<ICryptoCurrency[]>([]);

    const startRequest = () => {
        if (localStorage.getItem('coins')) {
            setResponse(JSON.parse(localStorage.getItem('coins') || '[]'));
        } else {
            axios.get(API)
                .then((res) => {
                    if (res.data) {
                        localStorage.setItem('coins', JSON.stringify(res.data.data));
                        setResponse(res.data.data);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    };

    useEffect(() => {
        startRequest();
    }, []);

    useEffect(() => {
        startRequest();
        const interval = setInterval(() => {
            localStorage.removeItem('coins');
        }, 100000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div id={`Market`} className={`w-[90%] h-[832px] bg-[#141414] flex flex-col text-white items-center`}>
            
            <h1 className={`text-[2.0rem] text-start pl-5 font-medium h-[100px]`}>Market Update</h1>
            <TableMarket data={response}/>
            
        </div>
    );
}