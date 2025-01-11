import React from 'react'

function Contact() {
    return (
        <div className='mt-20'>
            <div className="flex items-center">
                <div className="h-[1px] bg-[#dc493a] w-[175px]">
                </div>
                <h1 className="text-roboto text-[56px] flex">
                    <b>İletişim</b>
                </h1>
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className=" bg-[#F7054F] w-[90vw] text-white font-mont flex text-xs box-border p-10">
                    <div className="w-[50%] flex-col flex gap-2">
                        <h3>Çalışma Saatleri</h3>
                        <br />
                        <p>Pazartesi - Cuma</p>
                        <p>08:30 to 19:00 </p>
                        <p>Destek ekibimiz 7/24 hizmetinizdedir.</p>
                    </div>
                    <div className="w-[50%] flex-col flex gap-2">
                        <h3>İletişimne geç</h3>
                        <br />
                        <p>+90 (505) 555 55 55</p>
                        <p>info@produksyonacar.com </p>
                        <p>Demetevler Mahallesi, 403 Sokak, 12/4, İstanbul/Yenimahalle</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact