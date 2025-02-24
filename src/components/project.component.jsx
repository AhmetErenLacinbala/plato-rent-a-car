import React, { useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ersan_kuneri from "@assets/ersan_kuneri.jpg"
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
import ans from "@assets/logos/ans.webp";
import atv from "@assets/logos/atv.png";
import avsar from "@assets/logos/avsar.jpg";
import ayapim from "@assets/logos/ayyapim.jpg";
import bkm from "@assets/logos/bkm.png";
import blutv from "@assets/logos/blutv.png";
import bozdag from "@assets/logos/bozdag.jpeg";
import camasir from "@assets/logos/camasir.jpg";
import cm from "@assets/logos/cm.png";
import d from "@assets/logos/d.jpeg";
import disney from "@assets/logos/disney.png";
import erler from "@assets/logos/erler.jpg";
import es from "@assets/logos/es.jpg";
import Exxen from "@assets/logos/Exxen.png";
import fabrica from "@assets/logos/fabrika.jpeg";
import fox from "@assets/logos/fox.png";
import foxtv from "@assets/logos/foxtv.png";
import gain from "@assets/logos/gain.png";
import gold from "@assets/logos/gold.png";
import karga from "@assets/logos/karga.jpeg";
import mf from "@assets/logos/mf.jpg";
import most from "@assets/logos/most.jpeg";
import netflix from "@assets/logos/netflix.svg";
import ntc from "@assets/logos/ntc.jpeg";
import o3 from "@assets/logos/o3.jpg";
import ogm from "@assets/logos/ogm.png";
import ojo from "@assets/logos/ojo.jpeg";
import pastel from "@assets/logos/pastel.png";
import primevideo from "@assets/logos/primevideo.png";
import Puhutv from "@assets/logos/Puhutv.jpg";
import sekans from "@assets/logos/sekans.jpg";
import show from "@assets/logos/show.png";
import sinegraf from "@assets/logos/sinegraf.png";
import star from "@assets/logos/star.png";
import surec from "@assets/logos/surec.png";
import taff from "@assets/logos/taff.png";
import tims from "@assets/logos/tims.jpg";
import tmc from "@assets/logos/tmc.jpg";
import trt from "@assets/logos/trt.png";
import tv8 from "@assets/logos/tv8.jpg";
import zera from "@assets/logos/zera.png";
import Header from './header';

const companies = [
    { name: "ans", img: ans },
    { name: "atv", img: atv },
    { name: "avsar", img: avsar },
    { name: "ayapim", img: ayapim },
    { name: "bkm", img: bkm },
    { name: "blutv", img: blutv },
    { name: "bozdag", img: bozdag },
    { name: "camasir", img: camasir },
    { name: "cm", img: cm },
    { name: "d", img: d },
    { name: "disney", img: disney },
    { name: "erler", img: erler },
    { name: "es", img: es },
    { name: "Exxen", img: Exxen },
    { name: "fabrika", img: fabrica },
    { name: "fox", img: fox },
    { name: "foxtv", img: foxtv },
    { name: "gain", img: gain },
    { name: "gold", img: gold },
    { name: "karga", img: karga },
    { name: "mf", img: mf },
    { name: "most", img: most },
    { name: "netflix", img: netflix },
    { name: "ntc", img: ntc },
    { name: "o3", img: o3 },
    { name: "ogm", img: ogm },
    { name: "ojo", img: ojo },
    { name: "pastel", img: pastel },
    { name: "primevideo", img: primevideo },
    { name: "Puhutv", img: Puhutv },
    { name: "sekans", img: sekans },
    { name: "show", img: show },
    { name: "sinegraf", img: sinegraf },
    { name: "star", img: star },
    { name: "surec", img: surec },
    { name: "taff", img: taff },
    { name: "tims", img: tims },
    { name: "tmc", img: tmc },
    { name: "trt", img: trt },
    { name: "tv8", img: tv8 },
    { name: "zera", img: zera },
];


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
        breakpoint: { max: 1024, min: 700 },
        items: 3
    },
    tabletsm: {
        breakpoint: { max: 700, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive2 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 3
    },
    tabletsm: {
        breakpoint: { max: 700, min: 0 },
        items: 3
    },

};





function Projects() {



    return (
        <div className="mt-12">
            <Header text={"Bizi Tercih Edenler"}></Header>

            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}
                className='pl-[30px]'>
                {projects.map(data => {
                    return (
                        <div className='lg:h-[420px] h-[500px] pl-3' key={uuidv4()}>
                            <img className='h-full w-auto' src={data} alt="" />
                        </div>
                    )
                })}

            </Carousel>


        </div>
    )
}

export default Projects
