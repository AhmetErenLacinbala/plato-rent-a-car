import { v4 as uuidv4 } from "uuid";
import detailsImg1 from "@assets/location.svg";
import detailsImg2 from "@assets/time.svg";
import detailsImg3 from "@assets/date.svg";


const DetailsData = [
    {
        title: "Hızlı ve Kolay Rezervasyon",
        desc: "Araç kiralama işleminiz hiç bu kadar kolay olmamıştı! Sadece birkaç adımda istediğiniz aracı seçebilir ve setleriniz için hızlıca kiralama işleminizi tamamlayabilirsiniz. Film ve dizi setleri için uygun araçlar, zamanında teslimat garantisi ile sizleri bekliyor.",
        img: detailsImg1,

    },
    {
        title: "Kolay Ödeme ve İade Seçenekleri",
        desc: "Siz ve ekibinizin zamanına değer veriyoruz. Kiraladığınız araçları istediğiniz zaman bloke olmadan teslim alabilir ve iade edebilirsiniz. Esnek teslimat seçeneklerimizle, setlerinizde zaman kaybı yaşamanızın önüne geçiyoruz.",
        img: detailsImg2
    },
    {
        title: "İkonik Araç Seçenekleri",
        desc: "Setlerinizde kullanılacak ikonik araçları keşfedin. Sinema tarihine damgasını vurmuş araç modelleriyle projenize özel atmosferi yaratın. Klasik araçlardan nostaljik modellere kadar geniş seçenek yelpazemizle, projenizin her ayrıntısına hitap ediyoruz.",
        img: detailsImg3
    },

];

function Details() {
    return (
        <div className="pt-[50px]">
            <div className="flex items-center">
                <div className="h-[1px] bg-[#dc493a] w-[175px]">
                </div>
                <h1 className="text-roboto text-[56px] flex">
                    <b>Neden Biz?</b>
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col flex-nowrap justify-center text-center  gap-10 lg:gap-[10v  pt-8  items-center">

                {DetailsData.map((data) => {
                    return (
                        <div key={uuidv4()} className="lg:w-[15vw] w-[80%] text-gray flex flex-col items-center gap-1">
                            <div className="size-[90px] flex justify-center items-center border-[#dc493a] border-[1px] rotate-45">
                                <img className=" w-[50%] h-auto -rotate-45" src={data.img} alt="" />
                            </div>
                            <h3 className="mt-[30px] text-lg font-comfortaa font-bold">
                                {data.title}
                            </h3>
                            <p className="font-comfort font-normal text-sm">{data.desc}</p>

                        </div>
                    );
                })}
            </div>
        </div>)
}

export default Details