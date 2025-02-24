import React from 'react'

function Header(props) {
    const { text, size } = props;
    if (size === "small") {
        return (
            <div className="flex items-end mb-2">
                <div className="h-[1px] bg-[#dc493a] w-[35px] mb-[6px]">
                </div>
                <h2 className="text-roboto flex">
                    <b>{text}</b>
                </h2>
            </div>
        )
    }
    return (
        <div className="flex items-end">
            <div className={`h-[1px] bg-[#dc493a] w-[175px] mb-[21px]`}>
            </div>
            <h1 className={`text-roboto text-[56px] flex`}>
                <b>{text}</b>
            </h1>
        </div>
    )
}

/*
<div className="flex items-center mb-2">
                                    <div className="h-[1px] bg-[#dc493a] w-[35px]">
                                    </div>
                                    <h2 className="text-roboto flex">
                                        <b>Premium</b>
                                    </h2>
                                </div>
*/
export default Header