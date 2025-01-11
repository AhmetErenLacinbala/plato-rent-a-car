
import bottomImage from "@assets/bottom_image.webp";
import { Link } from "react-router-dom";
import premium from "@assets/premium/1.jpg";
import eco from "@assets/eco/1.jpg";
import project from "@assets/project/3.jpg";

function Whyus() {
    return (
        <div className="mt-12">

            <div className="flex w-screen mt-4 justify-center">
                <div className='relative flex items-center'>
                    <div>


                        <div className="relative mb-5 mr-5">
                            <div className="">
                                <img className="rounded-[25px]" src={premium} alt="" />
                            </div>
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-5 right-[-30px] w-[70%] rounded-[15px]">
                                <div className="flex items-center mb-2">
                                    <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                    </div>
                                    <h2 className="text-roboto flex">
                                        <b>Premium</b>
                                    </h2>
                                </div>
                                <p className="ml-8">Premium araçlarımız, prestij ve konfor arayanlar için mükemmel bir tercihtir. Yüksek performans, zarif tasarım ve lüks iç mekanları ile projelerinize değer katacak araçlar sunuyoruz. İster aksiyon dolu sahneler, ister dramatik anlar olsun, premium araçlarımız her zaman görsel ve duygusal etki yaratır. <Link className=" underline" to="cars?type=premium">Daha fazla...</Link></p>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img className="rounded-[25px]" src={eco} alt="" />
                            </div>
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-4 right-[-30px] w-[70%] rounded-[15px]">
                                <div className="flex items-center mb-2">
                                    <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                    </div>
                                    <h2 className="text-roboto flex">
                                        <b>Eco</b>
                                    </h2>
                                </div>
                                <p className="ml-8">Eco araçlarımız, çevre dostu seçeneklerle projelerinizi daha sürdürülebilir hale getirir. Ekonomik ve düşük yakıt tüketimiyle bütçenizi korurken, çevreye duyarlı bir yaklaşım sergileyebilirsiniz. Modern, pratik ve etkili olan eco araçlarımız, günümüz yaşamını yansıtan sahneler için ideal bir tercihtir. <Link className="underline" to="cars?type=eco">Daha fazla...</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div>
                            <img className="rounded-[25px]" src={project} alt="" />
                        </div>
                        <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-[#1A1A1A] top-5 right-[-30px] w-[70%] rounded-[15px]">
                            <div className="flex items-center mb-2">
                                <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                </div>
                                <h2 className="text-roboto flex">
                                    <b>Proje Araç</b>
                                </h2>
                            </div>
                            <p className="ml-8">Proje araçlarımız, film ve dizi setlerinde karakterlerinizi ve hikayenizi güçlendirecek ikonik araçlardan oluşur. Her biri belirli bir dönemi veya temayı yansıtarak, projenizin atmosferini en iyi şekilde oluşturmanıza yardımcı olur. Özgün tasarımları ve tarihi değeri ile proje araçlarımız, izleyiciye unutulmaz bir deneyim sunar. <Link className="underline" to="cars?type=project">Daha fazla...</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus