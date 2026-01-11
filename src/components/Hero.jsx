import React from 'react'
import tec from "../asstets/tec.mp4"


function Hero() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 ">
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
                    <div className="m-auto w-1/2">
                        <video
                            autoPlay
                            loop
                            muted
                            className='w-full'

                        >
                            <source src='tec' type='video/mp4' />

                        </video>
                    </div>
                </div>



            </h1>

        </div>
    )
}

export default Hero