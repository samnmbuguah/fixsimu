'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-gray-300">
                        Developed by{' '}
                        <Link 
                            href="https://akilinova.tech" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                            Akilinova
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
} 