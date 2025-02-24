import bottomImage from "@assets/bottom_image.webp";
import { Link } from "react-router-dom";
import premium from "@assets/premium/1.jpg";
import eco from "@assets/eco/1.jpg";
import project from "@assets/project/4.jpg";
import Header from "./header";

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
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-opacity-95 bg-[#1A1A1A] top-5 lg:right-[-30px] right-0 w-[70%] rounded-[15px]">
                                <Header text="Premium Araçlar" size={"small"}></Header>
                                <p className="ml-8">Premium araçlarımız, projelerinize değer katar ve prestijli bir deneyim sunar. <Link className=" underline" to="cars?type=premium">Daha fazla...</Link></p>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <img className="rounded-[25px] scale-x-[-1]" src={eco} alt="" />
                            </div>
                            <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-opacity-95 bg-[#1A1A1A] top-4 lg:right-[-30px] right-0 w-[70%] rounded-[15px]">
                                <Header text="Eco Araçlar" size={"small"}></Header>
                                <p className="ml-8">Eco araçlarımız, sürdürülebilir projeler ve ekonomik alternatifler sağlar. <Link className="underline" to="cars?type=eco">Daha fazla...</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-4">
                        <div>
                            <img className="rounded-[25px]" src={project} alt="" />
                        </div>
                        <div className=" box-border pt-8 pb-8 pr-8 absolute z-10 bg-opacity-95 bg-[#1A1A1A] top-5 lg:right-[-30px] right-0 w-[70%] rounded-[15px]">
                            <Header text="Aksesuar Araçlar" size={"small"}></Header>
                            <p className="ml-8">Aksesuar araçlarımız, setlerde ikonik atmosfer yaratır ve nostaljik bir deneyim sunar. <Link className="underline" to="cars?type=project">Daha fazla...</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus;
