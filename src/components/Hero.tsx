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
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero-video-optimized.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Professional</span>{' '}
                        <span className="block text-blue-400">Device Repair Services</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                        Expert repair services for your phones and laptops. Fast, reliable, and affordable solutions to get your devices working like new again.
                    </p>
                    <div className="mt-5 sm:mt-8 flex justify-center">
                        <div className="rounded-md shadow">
                            <Link
                                href="/#contact"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link
                                href="/#services"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-800/50 hover:bg-blue-800/70 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 