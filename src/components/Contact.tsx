'use client';

export default function Contact() {
    return (
        <div id="contact" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Get in touch with us for all your repair needs
                    </p>
                </div>

                <div className="mt-20 max-w-2xl mx-auto">
                    {/* Contact Information */}
                    <div className="bg-blue-50 rounded-lg p-8 transform transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Our Contact Information
                        </h3>
                        <div className="space-y-8">
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a 
                                    href="tel:0722255330" 
                                    className="ml-4 text-xl text-gray-700 hover:text-blue-600 transition-colors"
                                    aria-label="Call us at 0722255330"
                                >
                                    0722255330
                                </a>
                            </div>
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a 
                                    href="mailto:contact@fixsimu.com" 
                                    className="ml-4 text-xl text-gray-700 hover:text-blue-600 transition-colors"
                                    aria-label="Email us at contact@fixsimu.com"
                                >
                                    contact@fixsimu.com
                                </a>
                            </div>
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="ml-4 text-xl text-gray-700">Shop No. 10, Union Towers 1st Floor, Nairobi, Kenya</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Business Hours</h4>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 text-center">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-lg text-gray-700 text-center">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-lg text-gray-700 text-center">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 