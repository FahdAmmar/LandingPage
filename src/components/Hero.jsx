import React from 'react'
import tec from "../asstets/tec.mp4"
import video1 from "../asstets/video1.mp4"


function Hero() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 overflow-hidden ">
            <h1 className="text-4xl sm:text-7xl text-center tracking-wide">
                We build tools
                <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}

                    Modern Design Excellence
                </span>
                <div className=" text-2xl text-center text-gray-400/40 mt-10 max-w-full md:w-1/2 m-auto">
                    <p>
                        Empower your creativity and bring your VR app ideas to life with our
                        intuitive development tools. Get started today and turn your imagination
                        into immersive reality!
                    </p>
                    <div className="flex justify-evenly items-center mt-6">
                        <button className='py-3 p-x-4 mx-4 bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text border-2 border-white'>Start for free</button>

                        <button className='py-3 p-x-4 mx-4 bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text border-2 border-white hover:text-white'>Documentation</button>
                    </div>
                    <div className=" mt-10 flex justify-center ">
                        <video className='w-1/2 rounded-lg mx-2 my-4 border-2 border-orange-400 shadow-amber-500'
                            autoPlay
                            loop
                            muted
                        >
                            <source src={tec} type='video/mp4' />

                        </video>
                        <video className='w-1/2 rounded-lg mx-2 my-4 border-2 border-orange-400 shadow-amber-500'
                            autoPlay
                            loop
                            muted

                        >
                            <source src={video1} type='video/mp4' />

                        </video>
                    </div>
                </div>



            </h1>

        </div>
    )
}

export default Hero