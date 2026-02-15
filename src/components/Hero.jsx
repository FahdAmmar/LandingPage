import React from 'react';
import tec from '../asstets/tec.mp4';
import video1 from '../asstets/video1.mp4';
import { useTheme } from '../themes/DarkTheme';

function Hero() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="flex flex-col items-center mt-6 lg:mt-20 px-4">
            {/* العنوان الرئيسي */}
            <h1 className="text-4xl sm:text-7xl text-center tracking-wide max-w-4xl mx-auto">
                We build tools{' '}
                <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    Modern Design Excellence
                </span>
            </h1>

            {/* الوصف */}
            <div className="text-sm md:text-lg lg:text-2xl text-center mt-10 max-w-3xl mx-auto">
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Empower your creativity and bring your VR app ideas to life with our
                    intuitive development tools. Get started today and turn your imagination
                    into immersive reality!
                </p>
            </div>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <button
                    className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            bg-linear-to-r from-orange-500 to-red-800 text-white
            hover:shadow-lg hover:shadow-orange-500/30
            ${!isDark ? 'border-2 border-red-400' : 'border-2 border-transparent'}
          `}
                >
                    Start for free
                </button>

                <button
                    className="
            px-6 py-3 rounded-full font-medium transition-all duration-300
            border-2 border-orange-500 text-orange-500
            hover:bg-orange-500 hover:text-white
          "
                >
                    Documentation
                </button>
            </div>

            {/* الفيديوهات */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 w-full max-w-6xl">
                <video
                    className="w-full md:w-1/2 rounded-2xl shadow-2xl border-2 border-orange-400"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={tec} type="video/mp4" />
                </video>

                <video
                    className="w-full md:w-1/2 rounded-2xl shadow-2xl border-2 border-orange-400"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={video1} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Hero;