import { HandySvg } from 'handy-svg'
import FaceBookSVG from '../svg/footer/facebook.svg'
import InstagrammSVG from '../svg/footer/instagramm.svg'
import YouTobeSVG from '../svg/footer/youtobe.svg'
import TwitterSVG from '../svg/footer/twitter.svg'

const icons =[
    {
        svg: FaceBookSVG,
        url: ''
    },
    {
    svg: InstagrammSVG,
        url: ''
    },
    {
    svg: YouTobeSVG,
    url: ''
    },
    {
    svg: TwitterSVG,
    url: ''
    }
]

const footerContent =[
    {
        title: 'PRODUCTS',
        content: ['Spots', 'Inverse Perpetual', 'USDT Perpetual', 'Exchange', 'Launchpad', 'Binance Pay' ]
    },
    {
        title: 'SERVICES',
        content: ['Buy Crypto', 'Markets', 'Tranding Fee', 'Affiliate Program', 'Referral Program', 'API' ]
    },
    {
        title: 'SUPPORT',
        content: ['Bybit Learn', 'Help Center', 'User Feedback', 'Submit a request', 'API Document', 'Trading Rules' ]
    },
    {
        title: 'ABOUT US',
        content: ['About Bybit', 'Authenticty Check', 'Careers', 'Exchange', 'Business Contacts', 'Blog' ]
    }
]


export default function Footer(){

    return(
        <div className={`w-[100%] h-[400px] max-w-[1000px] flex flex-col text-white mt-10 pt-10 sm:h-[1200px]`}>
            <div className={`flex w-[100%] justify-around mb-10 text-[0.8rem] sm:flex-col sm:items-center sm:text-[1.3rem]`}>
                <div className={`w-[40%] flex flex-col items-center sm:hidden md:hidden `}>
<div className={`w-[70%] h-[100%] flex flex-col justify-between`}>
<p className={``}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p>+12 345 678 9101</p>
<p>info@gmail.com</p>
<p>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>

</div>

                </div>
        
        {
            footerContent.map((el, index)=>
            <ul className={`w-[20%] text-start sm:w-[50%] `}
            style={{
                display: index===0&&window.innerWidth<601? 'none' : 'block'
            }}
            >
                <p className={`mb-5 font-medium  sm:font-bold sm:mb-1 sm:mt-10 sm:text-center `}>{el.title}</p>
                {el.content.map((content, index)=> 
                    <li className={`text-start mb-3  sm:text-center`}>{content}</li>
                    )}
            </ul>
            )
        }


            </div>
            <div className={`w-[100%] h-[150px] flex justify-around items-center sm:flex-col  sm:justify-between`}>

                <p className={`text-[0.8rem] `}>Copyright @ 2023 Company</p>
                
                <div  className={`flex w-[200px] h-[80%] justify-around items-center sm:mt-0`}>
                    {icons.map((el, index)=>
                    <a href={el.url} target="_blank" className={`w-[30px] h-[30px] bg-cover bg-center `}>
                        <HandySvg src={el.svg} className={`w-[30px] h-[20px]`}/>
                    </a>
                    )}
                </div>

            </div>
        </div>
    )
}