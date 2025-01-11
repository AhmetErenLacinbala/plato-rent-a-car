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
import cars from "@assets/arabalar.jpg";
import { v4 as uuidv4 } from "uuid";

const Premium = {
    title: "Premium Araçlar",
    desc: "Premium araçlarımız, film ve dizi setlerinde ihtişam, prestij ve konforu bir arada arayan yapımcılar için ideal tercihlerdir. Bu araçlar, sadece şık ve zarif tasarımlarıyla değil, aynı zamanda yüksek performanslarıyla da dikkat çeker. Lüks iç mekanları, sofistike donanımları ve güçlü motor seçenekleriyle projelerinize değer katacak araçlar sunuyoruz. İster aksiyon dolu sahnelerde hız ve gücü simgeleyen bir araç arayın, ister dramatik anlarda karakterlerin zarif yaşam tarzlarını yansıtacak bir model seçin, premium araçlarımız her zaman etkileyici bir görsel izlenim bırakır. Bu araçlar, prestijli ve üst düzey yaşamı yansıtan sahneler için mükemmel seçimlerdir. Öne çıkan premium araç modellerimiz arasında Mercedes-Benz S-Class, BMW 7 Serisi ve Audi Q8 yer almaktadır.",
    img: [prem1, prem2, prem3],
    cars: [
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        }
    ]
}

const Eco = {
    title: "Eco Araçlar",
    desc: "Eco araçlarımız, çevre dostu ve sürdürülebilir çözümler arayan film ve dizi yapımcıları için mükemmel bir alternatiftir. Düşük yakıt tüketimi ve çevreye duyarlı tasarımları sayesinde hem bütçenizi koruyabilir hem de projenize modern ve çevre dostu bir hava katabilirsiniz. Ekonomik olmalarıyla birlikte, pratik ve verimli olmaları nedeniyle günlük yaşamı yansıtan sahnelerde sıklıkla tercih edilir. Eco araçlar, genellikle genç karakterlerin dinamizmini, şehir içi hayatı veya çevre bilincini anlatan projelerde kullanılır. Çevreye duyarlı bir yaklaşım sergileyerek, projelerinize hem görsel hem de anlam açısından değer katabilirsiniz. Popüler eco araç modellerimiz arasında Renault Clio, Hyundai i20 ve Toyota Yaris bulunuyor.",
    img: [eco1, eco2, eco3],
    cars: [
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        }
    ]
}

const Proje = {
    title: "Proje Araçlar",
    desc: "Proje araçlarımız, film ve dizi setlerinde kullanılan ikonik, nostaljik ve kültürel değeri olan araçlardan oluşur. Bu araçlar, belirli bir dönemi, karakteri veya temayı yansıtmak için mükemmel seçimlerdir. İster geçmiş yıllara ait klasik bir model, ister kültürel bir simge olan nostaljik bir araç arayın, proje araçlarımız her zaman hikayenizi güçlendirecek şekilde tasarlanmıştır. Özellikle tarihsel veya dramatik projelerde, karakterlerin kimliklerini daha derinlemesine yansıtarak izleyiciye güçlü bir atmosfer sunar. Özgün tasarımları ve tarihi değeri ile proje araçlarımız, filminiz ya da diziniz için unutulmaz bir deneyim yaratmanıza yardımcı olacaktır. Setlerde sıklıkla tercih edilen proje araçları arasında Ford Mustang (1960'lar), Chevrolet Camaro (1970'ler) ve Volkswagen Beetle yer alır.",
    img: [project1, project2, project3],
    cars: [
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        },
        {
            img: prem1,
            name: "Mercedes-Benz S-Class",
            cost: "1000₺",
            seat: 4,
            type: "SUV",
            frontCam: true,
            traffic: true,
            yıl: 2018,
            gear: "Manüel",
            fuel: "Dizel"
        }
    ]
}

function Car(props) {
    const { img } = props
    return (
        <div>
            <div>

            </div>
            <div>

            </div>
            <div>

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
        if (query === "project") setSelectedCars(Proje);
    });

    const [selectedCars, setSelectedCars] = useState(Premium);
    return (
        <div>
            <div className='h-[500px] w-full'>
                <img className='h-full w-full object-cover' src={cars} alt="" />
            </div>
            <div className="w-screen pt-8 box-border px-10">
                <h1 className='font-poppins text-2xl lg:text-3xl  text-titleWhite text-center'>Araçlarımız</h1>
                <h1 className=" font-poppins text-xl lg:text-xl font-light  text-[#dc493a] text-center ">
                    {selectedCars.title}
                </h1>


                <div className="flex flex-wrap justify-around text-gray">
                    <div className="w-[90vw] lg:w-[45vw] flex-shrink-0 justify-center items-center lg:mt-[0]">
                        <div className=" text-center lg:text-left h-auto m-auto lg:mt-[100px]">
                            <p className="font-poppins lg:max-w-[90%] lg:text-xl">
                                {selectedCars.desc}
                            </p>

                        </div>
                    </div>
                    <div className="lg:w-[47vw] lg:flex h-[500px] items-center justify-center gap-28">
                        <Carousel className="lg:w-[600px] h-[450px]" autoplay>
                            {selectedCars.img.map((element) => {
                                return (
                                    <img
                                        key={uuidv4()}
                                        className="object-cover rounded-[50px] w-full h-full"
                                        src={element}
                                        alt=""
                                    />
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cars