import bottomImage from "@assets/bottom_image.webp";
import { Link } from "react-router-dom";
import premium from "@assets/premium/1.jpg";
import eco from "@assets/eco/1.jpg";
import project from "@assets/project/3.jpg";

function Whyus() {
    return (
        <div className="mt-12">

            <div className="flex w-screen mt-4 justify-center">
                <div className='relative lg:flex items-center'>
                    <div>


                        <div className="relative mb-5 lg:mr-5">
                            <div className="">
                                <img className="rounded-[25px] scale-x-[-1]" src={premium} alt="" />
                            </div>
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-5 lg:right-[-30px] scale-x-[-1] right-0 w-[70%] rounded-[15px]">
                                <div className="flex items-center mb-2">
                                    <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                    </div>
                                    <h2 className="text-roboto flex">
                                        <b>Premium</b>
                                    </h2>
                                </div>
                                <p className="ml-8">Premium araçlarımız, hem kamera önünde kullanılabilir hem de misafirlere prestijli bir deneyim sunar. Yüksek performans ve zarif tasarımları ile projelerinize değer katar. <Link className=" underline" to="cars?type=premium">Daha fazla...</Link></p>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img className="rounded-[25px] scale-x-[-1]" src={eco} alt="" />
                            </div>
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-4 lg:right-[-30px] right-0 w-[70%] rounded-[15px]">
                                <div className="flex items-center mb-2">
                                    <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                    </div>
                                    <h2 className="text-roboto flex">
                                        <b>Eco</b>
                                    </h2>
                                </div>
                                <p className="ml-8">Eco araçlarımız, çevre dostu seçeneklerle projelerinizi daha sürdürülebilir hale getirirken, misafirleriniz için de ekonomik bir alternatif sunar. <Link className="underline" to="cars?type=eco">Daha fazla...</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-4">
                        <div>
                            <img className="rounded-[25px]" src={project} alt="" />
                        </div>
                        <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-5 lg:right-[-30px] right-0 w-[70%] rounded-[15px]">
                            <div className="flex items-center mb-2">
                                <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                </div>
                                <h2 className="text-roboto flex">
                                    <b>Proje Araç</b>
                                </h2>
                            </div>
                            <p className="ml-8">Proje araçlarımız, hem film ve dizi setlerinde ikonik bir atmosfer yaratır hem de misafirlerinize nostaljik bir deneyim sunar. <Link className="underline" to="cars?type=project">Daha fazla...</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus;
