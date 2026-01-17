import React from 'react'
import { features } from '../Data/data'
import { Fullscreen } from 'lucide-react'
function FeutureSection() {
    return (
        <section className='relative mt-10 md:mt-20  min-h-svh '>
            <div className="text-center">
                <span className=" text-sm border-2 border-orange-500 text-orange-300
                p-1 bg-neutral-700 rounded-full"
                >feuture</span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-wrap">
                    Easily build <span className='bg-linear-to-r from-orange-400 to-red-800 text-transparent 
                    bg-clip-text'>your code</span>
                </h1>
                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {features.map((feature, index) => (<div key={index} className='w-full sm:w-1/2 lg:w-1/3'>

                        <div className="flex">
                            <div className="w-10 h-10 bg-neutral-900 mx-6 p-2 rounded-full text-orange-400
                             grid place-items-center">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-2xl">{feature.text}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>


                        </div>
                    </div>))}

                </div>

            </div>

        </section>
    )
}

export default FeutureSection