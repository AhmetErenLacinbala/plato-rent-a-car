import { v4 as uuidv4 } from "uuid";
import logo from "@assets/logo.png";
import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";


const navProps = [
    {
        text: "Koleksiyon",
        link: "/cars"
    }, {
        text: "İletişim",
        link: "/"
    },
]

const items = [
    {
        key: '1',
        label: (
            <a rel="noopener noreferrer" href="/cars?type=premium">
                Premium Araçlar
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a rel="noopener noreferrer" href="/cars?type=eco">
                Eco Araçlar
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a rel="noopener noreferrer" href="/cars?type=proje">
                Aksesuar Araçlar
            </a>
        ),
    },

];

function Nav() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    return (
        <nav className="w-screen fixed top-0 z-50 flex justify-between p-4 bg-black bg-opacity-70 align-middle">

            <div className="w-[70vw]">
                <div className="lg:h-[50px] h-[30px]">
                    <a href="/">

                        <img className="h-full w-auto" src={logo} alt="" />
                    </a>
                </div>
            </div>
            <div className="lg:h-[50px] h-[30px] min-w-[200px]">
                <ul className="font-light gap-8 flex h-full items-center justify-between pr-6">

                    <div className="group h-full flex items-center">
                        <li className="animate02">

                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Araçlarımız
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </div>
                    <div className="group h-full flex items-center">
                        <li className="animate02">
                            <div className="animate02 cursor-pointer" onClick={scrollToBottom}>
                                İletişim
                            </div>
                            <div className="animate02 group-hover:w-full w-[0px] h-[0.5px] bg-white"></div>
                        </li>
                    </div>

                </ul>
            </div>
        </nav>

    )
}

export default Nav