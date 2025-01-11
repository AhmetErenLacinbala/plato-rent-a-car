import { Carousel } from 'antd';
import heroImage1 from "@assets/hero1.webp";
import hero1 from "@assets/hero/1.jpg";
import hero2 from "@assets/hero/2.jpg";
import hero3 from "@assets/hero/3.jpg";
import { v4 as uuidv4 } from "uuid";


const heroImages = [
    {
        img: hero2,
    }, {
        img: hero3,
    }, {
        img: hero1,
    },
]

function Hero() {
    return (
        <div>
            <Carousel autoplay>
                {heroImages.map((element) => {
                    return (
                        <div key={uuidv4()} className='h-screen w-full'>
                            <img className='h-full w-full object-cover' src={element.img} alt="" />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Hero