import React from 'react'
import { pricingOptions } from '../Data/data'
import { CheckCircle2 } from 'lucide-react'
function Pricing() {
    return (
        <section className='pricing-section mt-20'>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h1>
            <div className='flex flex-wrap'>
                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                        <div className='p-10 border border-gray-700 rounded-lg '>
                            <h2 className='text-2xl font-semibold mb-4'>{option.title}
                                {option.title == "Professional" && (<span className='bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ml-2 text-sm'>(Most Popular)</span>
                                )}
                            </h2>
                            <p className='mb-10'>
                                <span className='text-3xl mt-6 mr-2'>{option.price}</span>
                            </p>
                            <ul>{option.features.map((feature, index) => (
                                <li key={index} className='mt-8 flex gap-4 items-center'>
                                    <CheckCircle2 />
                                    <span className='ml-2 '>{feature}</span>


                                </li>

                            ))}
                            </ul>
                            <a href="#" className='mt-10 inline-block w-full  hover:bg-orange-900 border border-orange-900 transition duration-200 text-white font-semibold py-3 rounded-lg text-center'>Choose Plan</a>

                        </div>
                    </div>
                ))}


            </div>

        </section>
    )
}

export default Pricing