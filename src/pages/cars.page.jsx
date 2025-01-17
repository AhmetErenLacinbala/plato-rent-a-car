import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react'
import prem1 from "@assets/premium/1.jpg";
import prem2 from "@assets/premium/2.jpg";
import prem3 from "@assets/premium/3.jpg";
import eco1 from "@assets/eco/1.jpg";
import eco2 from "@assets/eco/2.jpg";
import eco3 from "@assets/eco/3.jpg";
import project1 from "@assets/project/1.jpg";
import project2 from "@assets/project/2.jpg";
import project3 from "@assets/project/3.jpg";
import project4 from "@assets/project/4.jpg";
import cars from "@assets/arabalar.jpg";
import date_img from "@assets/car_assets/date.svg";
import camera from "@assets/car_assets/camera.svg";
import car from "@assets/car_assets/car.svg";
import door_img from "@assets/car_assets/door.svg";
import people from "@assets/car_assets/people.svg";
import road from "@assets/car_assets/road.svg";
import gear_img from "@assets/car_assets/gear.svg";
import fuel_img from "@assets/car_assets/fuel.svg";
import { v4 as uuidv4 } from "uuid";

const Premium = {
    title: "Premium Araçlar",
    desc: "Premium araçlarımız, film ve dizi setlerinde ihtişam, prestij ve konforu bir arada arayan yapımcılar için ideal tercihlerdir. Bu araçlar, sadece şık ve zarif tasarımlarıyla değil, aynı zamanda yüksek performanslarıyla da dikkat çeker. Lüks iç mekanları, sofistike donanımları ve güçlü motor seçenekleriyle projelerinize değer katacak araçlar sunuyoruz. İster aksiyon dolu sahnelerde hız ve gücü simgeleyen bir araç arayın, ister dramatik anlarda karakterlerin zarif yaşam tarzlarını yansıtacak bir model seçin, premium araçlarımız her zaman etkileyici bir görsel izlenim bırakır. Bu araçlar, prestijli ve üst düzey yaşamı yansıtan sahneler için mükemmel seçimlerdir. Öne çıkan premium araç modellerimiz arasında Mercedes-Benz S-Class, BMW 7 Serisi ve Audi Q8 yer almaktadır.",
    img: [prem1, prem2, prem3],
    cars: [
        {
            img: prem1,
            name: "BMW 7",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        },
        {
            img: prem2,
            name: "Mercedes-Benz S-Class",
            cost: "1500₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Otomatik",
            fuel: "Dizel",
            door: 4
        },
        {
            img: prem3,
            name: "Audi Q8",
            cost: "1200₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2023,
            gear: "Manüel",
            fuel: "Benzin",
            door: 4
        }
    ]
}

const Eco = {
    title: "Eco Araçlar",
    desc: "Eco araçlarımız, çevre dostu ve sürdürülebilir çözümler arayan film ve dizi yapımcıları için mükemmel bir alternatiftir. Düşük yakıt tüketimi ve çevreye duyarlı tasarımları sayesinde hem bütçenizi koruyabilir hem de projenize modern ve çevre dostu bir hava katabilirsiniz. Ekonomik olmalarıyla birlikte, pratik ve verimli olmaları nedeniyle günlük yaşamı yansıtan sahnelerde sıklıkla tercih edilir. Eco araçlar, genellikle genç karakterlerin dinamizmini, şehir içi hayatı veya çevre bilincini anlatan projelerde kullanılır. Çevreye duyarlı bir yaklaşım sergileyerek, projelerinize hem görsel hem de anlam açısından değer katabilirsiniz. Popüler eco araç modellerimiz arasında Renault Clio, Hyundai i20 ve Toyota Yaris bulunuyor.",
    img: [eco1, eco2, eco3],
    cars: [
        {
            img: eco1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        },
        {
            img: eco2,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Benzin",
            door: 4
        },
        {
            img: eco3,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        }
    ]
}

const Proje = {
    title: "Proje Araçlar",
    desc: "Proje araçlarımız, film ve dizi setlerinde kullanılan ikonik, nostaljik ve kültürel değeri olan araçlardan oluşur. Bu araçlar, belirli bir dönemi, karakteri veya temayı yansıtmak için mükemmel seçimlerdir. İster geçmiş yıllara ait klasik bir model, ister kültürel bir simge olan nostaljik bir araç arayın, proje araçlarımız her zaman hikayenizi güçlendirecek şekilde tasarlanmıştır. Özellikle tarihsel veya dramatik projelerde, karakterlerin kimliklerini daha derinlemesine yansıtarak izleyiciye güçlü bir atmosfer sunar. Özgün tasarımları ve tarihi değeri ile proje araçlarımız, filminiz ya da diziniz için unutulmaz bir deneyim yaratmanıza yardımcı olacaktır. Setlerde sıklıkla tercih edilen proje araçları arasında Ford Mustang (1960'lar), Chevrolet Camaro (1970'ler) ve Volkswagen Beetle yer alır.",
    img: [project1, project2, project3],
    cars: [
        {
            img: project1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        },
        {
            img: project2,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        },
        {
            img: project4,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            date: 2018,
            gear: "Manüel",
            fuel: "Dizel",
            door: 4
        }
    ]
}

function Car(props) {
    const { img, name, cost, seat, type, frontCam, traffic, date, gear, fuel, door } = props
    function CarAttr(props) {
        const { image, text } = props;
        return (
            <div className='flex pb-6'>
                <img className=' w-[17px] h-auto' src={image} alt="" /> <p className=' pl-3 pt-2 font-inter font-extralight text-sm'>{text}</p>
            </div>
        )
    }
    return (
        <div className='w-[400px] rounded-3xl  bg-[#161A1F]  overflow-hidden'>
            <Carousel autoplay>
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
            </Carousel>
            <div className='h-[60px] flex items-center align-middle w-full bg-[#10131B]'>
                <h3 className='w-full text-center'>ー {name} ー</h3>
            </div>
            <div className='rounded-b-3xl border-[#10131B] border-t-0 border'>



                <div className='w-full box-border p-5 flex '>
                    <div className='w-[50%]'>
                        <CarAttr image={car} text={type}></CarAttr>
                        <CarAttr image={door_img} text={door + " Kapı"}></CarAttr>
                        <CarAttr image={camera} text={frontCam ? "Sahneye Uygun" : "Sahneye Uygun Değil"}></CarAttr>
                        <CarAttr image={gear_img} text={gear}></CarAttr>
                    </div>
                    <div className='w-[50%] box-border pl-4'>
                        <CarAttr image={people} text={seat + " Kişi"}></CarAttr>
                        <CarAttr image={date_img} text={date}></CarAttr>
                        <CarAttr image={road} text={traffic ? "Trafiğe Çıkabilir" : "Trafiğe Çıkamaz"}></CarAttr>
                        <CarAttr image={fuel_img} text={fuel}></CarAttr>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cars() {

    const [carPara, setCarPara] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const query = queryParams.get('type');
        console.log(query);
        if (query === "premium") setSelectedCars(Premium);
        if (query === "eco") setSelectedCars(Eco);
        if (query === "proje") setSelectedCars(Proje);
    }, []);

    const [selectedCars, setSelectedCars] = useState(Premium);
    return (
        <div>
            <div className='h-[500px] w-full'>
                <img className='h-full w-full object-cover' src={cars} alt="" />
            </div>
            <div className="w-screen pt-10 box-border px-10">
                <h1 className='font-poppins text-2xl lg:text-3xl  text-titleWhite text-center'>Araçlarımız</h1>
                <h1 className=" font-poppins text-xl lg:text-xl font-light  text-[#dc493a] text-center ">
                    {selectedCars.title}
                </h1>
                <div className='flex justify-around flex-wrap pt-5 gap-4'>
                    {selectedCars.cars.map(car => {
                        return <Car key={uuidv4()} {...car} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default Cars