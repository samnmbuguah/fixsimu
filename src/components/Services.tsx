'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            title: 'Phone Repairs',
            description: 'Expert screen replacement, battery replacement, charging port repair, and more for all major brands. Same-day service available.',
            icon: '📱',
            image: `/images/new/phone-repair-broken-screen.jpg`,
            alt: 'Phone screen repair and protection service'
        },
        {
            title: 'Laptop Repairs',
            description: 'Professional hardware upgrades, screen replacement, keyboard replacement, and system optimization by experienced technicians.',
            icon: '💻',
            image: `/images/new/laptop-repair-kenyan-tech.jpg`,
            alt: 'Technician repairing laptop with screwdriver'
        },
        {
            title: 'Spare Parts',
            description: 'Genuine quality replacement parts for phones and laptops, all with warranty coverage. We stock parts for all major brands.',
            icon: '🔧',
            image: `/images/new/spare-parts.jpg`,
            alt: 'Phone accessories and spare parts'
        },
        {
            title: 'Data Recovery',
            description: 'Professional data recovery services for damaged or malfunctioning devices. We can recover your precious data safely.',
            icon: '💾',
            image: `/images/new/data-recovery-kenyan-tech.jpg`,
            alt: 'Data recovery from damaged devices'
        },
        {
            title: 'Diagnostics',
            description: 'Comprehensive device diagnostics by skilled technicians to identify and resolve issues effectively. Free initial assessment.',
            icon: '🔍',
            image: `/images/new/diagnostics-kenyan-tech.jpg`,
            alt: 'Technician performing circuit board diagnostics'
        },
        {
            title: 'Express Service',
            description: 'Quick turnaround time for urgent repairs with same-day service available. Priority handling for emergency cases.',
            icon: '⚡',
            image: `/images/new/express-service-kenyan.jpg`,
            alt: 'Express repair service with quick turnaround'
        }
    ];

    return (
        <div id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
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
                            className={`relative group bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index < 3}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity duration-300 group-hover:opacity-40" />
                            </div>
                            <div className="relative z-10 p-6 transition-transform duration-300 transform group-hover:-translate-y-1">
                                <span className="text-4xl transition-all duration-300 transform group-hover:scale-110 inline-block">
                                    {service.icon}
                                </span>
                                <h3 className="mt-4 text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-base text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 