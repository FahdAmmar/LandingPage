import React from 'react';
import { testimonials } from '../Data/data';
import { useTheme } from '../themes/DarkTheme';
import { Quote } from 'lucide-react'; // أيقونة اقتباس من lucide-react

function Testimonials() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="mt-20 tracking-wide px-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                What People are saying
            </h2>

            <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4 transition-all duration-300"
                    >
                        <div
                            className={`
                rounded-xl p-6 text-md border font-thin
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${isDark
                                    ? 'bg-neutral-900 border-neutral-800 hover:border-orange-500/50'
                                    : 'bg-white border-gray-200 hover:border-orange-500 shadow-md'
                                }
              `}
                        >
                            {/* أيقونة اقتباس */}
                            <Quote
                                className={`
                  w-8 h-8 mb-2 opacity-50
                  ${isDark ? 'text-orange-400' : 'text-orange-600'}
                `}
                            />

                            {/* نص الشهادة */}
                            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                {testimonial.text}
                            </p>

                            {/* معلومات المستخدم */}
                            <div className="flex mt-8 items-start">
                                <img
                                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-orange-400"
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                />
                                <div>
                                    <h6
                                        className={`
                      font-semibold text-lg
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}
                                    >
                                        {testimonial.user}
                                    </h6>
                                    <span
                                        className={`
                      text-sm font-normal italic
                      ${isDark ? 'text-neutral-400' : 'text-gray-500'}
                    `}
                                    >
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;