import React from 'react'
import backgroundImg from "../../public/chatBg.png"
import Image from 'next/image'

const chat = () => {
    return (
        <div className="w-full ">
            <div className="fixed z-0  w-[100vw] h-[100vh]">
                <Image
                    src={backgroundImg}
                    alt="Img"
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default chat