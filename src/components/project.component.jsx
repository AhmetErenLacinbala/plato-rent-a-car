import React, { useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ersan_kuneri from "@assets/ersan_kuneri.jpg"
import netflix from "@assets/netflix.svg"
import { v4 as uuidv4 } from "uuid";
import afis1 from "@assets/afis/1.jpg";
import afis2 from "@assets/afis/2.jpg";
import afis3 from "@assets/afis/3.jpg";
import afis4 from "@assets/afis/4.jpg";
import afis5 from "@assets/afis/5.jpg";
import afis6 from "@assets/afis/6.jpg";
import afis7 from "@assets/afis/7.jpg";
import afis8 from "@assets/afis/8.jpg";
import afis9 from "@assets/afis/9.jpg";
import afis10 from "@assets/afis/10.jpg";
import afis11 from "@assets/afis/11.jpg";
import afis12 from "@assets/afis/12.jpg";
import afis13 from "@assets/afis/13.jpg";
import afis14 from "@assets/afis/14.jpg";
import afis15 from "@assets/afis/15.png";
import afis16 from "@assets/afis/16.jpg";
import afis17 from "@assets/afis/17.jpg";
import afis18 from "@assets/afis/18.jpg";
import afis19 from "@assets/afis/19.png";
import afis20 from "@assets/afis/20.jpg";
import afis21 from "@assets/afis/21.jpg";
import afis22 from "@assets/afis/22.jpg";
import afis23 from "@assets/afis/23.jpg";
import afis24 from "@assets/afis/24.jpg";
import afis25 from "@assets/afis/25.jpg";
import afis26 from "@assets/afis/26.jpg";
import afis27 from "@assets/afis/27.jpg";
import afis28 from "@assets/afis/28.jpg";
import afis29 from "@assets/afis/29.jpg";
import afis30 from "@assets/afis/30.jpg";
import afis31 from "@assets/afis/31.jpg";
import afis32 from "@assets/afis/32.jpg";
import afis33 from "@assets/afis/33.jpg";
import afis34 from "@assets/afis/34.jpg";
import afis35 from "@assets/afis/35.jpg";
import afis36 from "@assets/afis/36.jpg";
import afis37 from "@assets/afis/37.jpg";
import afis38 from "@assets/afis/38.jpg";
import afis39 from "@assets/afis/39.jpg";
import afis40 from "@assets/afis/40.jpg";
import afis41 from "@assets/afis/41.jpg";
import afis42 from "@assets/afis/42.jpg";
import afis43 from "@assets/afis/43.jpg";
import afis44 from "@assets/afis/44.jpg";

const projects = [
    afis1, afis2, afis3, afis4, afis5, afis6, afis7, afis8, afis9, afis10,
    afis11, afis12, afis13, afis14, afis15, afis16, afis17, afis18, afis19, afis20,
    afis21, afis22, afis23, afis24, afis25, afis26, afis27, afis28, afis29, afis30,
    afis31, afis32, afis33, afis34, afis35, afis36, afis37, afis38, afis39, afis40,
    afis41, afis42, afis43, afis44
];



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const clients = [
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },
    { img: netflix },

]


function Projects() {



    return (
        <div className="mt-12">
            <div className="flex items-center">
                <div className="h-[1px] bg-[#dc493a] w-[175px]">
                </div>
                <h1 className="text-roboto text-[56px] flex">
                    <b>Bizi Tercih Edenler</b>
                </h1>
            </div>

            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}>
                {projects.map(data => {
                    return (
                        <div className='h-[420px] pl-3' key={uuidv4()}>
                            <img className='h-full w-auto' src={data} alt="" />
                        </div>
                    )
                })}

            </Carousel>


            <div className="flex items-center mt-10">
                <div className="h-[1px] bg-[#dc493a] w-[175px]">
                </div>
                <h1 className="text-roboto text-[56px] flex">
                    <b>Referanslarımız</b>
                </h1>
            </div>

            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}>
                {clients.map(data => {
                    return (
                        <div className='mr-10' key={uuidv4()}>
                            <img src={data.img} alt="" />
                        </div>
                    )
                })}

            </Carousel>
        </div>
    )
}

export default Projects
