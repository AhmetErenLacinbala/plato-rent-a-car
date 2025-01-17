import { Carousel } from 'antd';
import heroImage1 from "@assets/hero1.webp";
import hero1 from "@assets/hero/1.jpg";
import hero2 from "@assets/hero/2.jpg";
import hero3 from "@assets/hero/3.jpg";
import hero4 from "@assets/hero/4.jpg";
import hero5 from "@assets/hero/5.jpg";
import hero6 from "@assets/hero/6.jpg";
import _hero1 from "@assets/hero/_hero1.jpg";
import _hero2 from "@assets/hero/_hero2.jpg";
import _hero3 from "@assets/hero/_hero3.jpg";

import __hero2 from "@assets/hero/__hero2.jpg";
import { v4 as uuidv4 } from "uuid";


const heroImages = [
    {
        img: _hero1,
    },
    {
        img: __hero2,
    }
]

function Hero() {
    return (
        <div>
            <Carousel autoplay>


                <div key={uuidv4()} className='lg:h-screen lg:w-full h-full w-screen'>
                    <img className='h-full w-full object-cover' src={_hero1} alt="" />
                </div>
                <div key={uuidv4()} className='lg:h-screen lg:w-full h-full w-screen'>
                    <img className='h-full w-full object-cover' src={__hero2} alt="" />
                </div>

            </Carousel>

        </div>
    )
}

export default Hero