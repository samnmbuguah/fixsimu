'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/hero-video-optimized.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 h-full flex items-center justify-center text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Expert Device Repair Services
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                        Professional phone and laptop repairs with quality spare parts
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="#services"
                            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                        >
                            Our Services
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 