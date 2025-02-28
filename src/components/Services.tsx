'use client';

import { useState } from 'react';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/fixsimu' : '';

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            title: 'Phone Repairs',
            description: 'Screen replacement, battery replacement, charging port repair, and more for all major brands.',
            icon: '📱',
            image: `${basePath}/images/phone-repair.jpg`
        },
        {
            title: 'Laptop Repairs',
            description: 'Hardware upgrades, screen replacement, keyboard replacement, and system optimization.',
            icon: '💻',
            image: `${basePath}/images/laptop-repair.jpg`
        },
        {
            title: 'Spare Parts',
            description: 'Quality replacement parts for phones and laptops, with warranty coverage.',
            icon: '🔧',
            image: `${basePath}/images/spare-parts.jpg`
        },
        {
            title: 'Data Recovery',
            description: 'Professional data recovery services for damaged or malfunctioning devices.',
            icon: '💾',
            image: `${basePath}/images/data-recovery.jpg`
        },
        {
            title: 'Diagnostics',
            description: 'Comprehensive device diagnostics to identify and resolve issues effectively.',
            icon: '🔍',
            image: `${basePath}/images/diagnostics.jpg`
        },
        {
            title: 'Express Service',
            description: 'Quick turnaround time for urgent repairs with same-day service available.',
            icon: '⚡',
            image: `${basePath}/images/express-service.jpg`
        }
    ];

    return (
        <div id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Professional repair services for all your device needs
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative group bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${hoveredIndex === index ? 'scale-105 shadow-xl' : ''
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                            </div>
                            <div className="relative z-10 p-6">
                                <span className={`text-4xl transition-transform duration-300 ${hoveredIndex === index ? 'transform scale-110' : ''
                                    }`}>
                                    {service.icon}
                                </span>
                                <h3 className="mt-4 text-xl font-medium text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    {service.description}
                                </p>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                }`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 