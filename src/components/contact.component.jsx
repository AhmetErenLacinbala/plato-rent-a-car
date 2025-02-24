import React from 'react'
import Header from './header'

function Contact() {
    return (
        <div className='mt-20'>
            <Header text={"İletişim"}></Header>
            <div className="flex justify-center items-center mt-10">
                <div className=" bg-[#1A1A1A] bg-opacity-10 w-[100vw] text-white font-mont flex text-xs box-border justify-around lg:p-16 p-8 gap-5">
                    <div className="w-[50%] flex-col flex gap-2">
                        <h3>Çalışma Saatleri</h3>
                        <br />
                        <p>Destek ekibimiz 7/24 hizmetinizdedir.</p>
                    </div>
                    <div className="w-[50%] flex-col flex gap-2">
                        <h3>İletişime geç</h3>
                        <br />
                        <p>+905013526015</p>
                        <p>office@beplato.tv </p>
                        <p>Çavuşoğlu, Sanatkarlar Cd. No:36, 34873 Kartal/İstanbul</p>
                        <a className='underline text-[#dc493a]' href="/privacy">Gizlilik ve Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact