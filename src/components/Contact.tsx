'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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

                <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="bg-blue-50 rounded-lg p-8 transform transition-all duration-300 hover:shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Our Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:0722255330" className="ml-3 text-gray-700 hover:text-blue-600 transition-colors">
                                    0722255330
                                </a>
                            </div>
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-3 text-gray-700">contact@fixsimu.com</span>
                            </div>
                            <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="ml-3 text-gray-700">Shop No. 10, Union Towers 1st Floor, Nairobi, Kenya</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h4>
                            <div className="space-y-2">
                                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-gray-700">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                                Thank you for your message. We will contact you soon!
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 transition-all duration-300 ${isSubmitting
                                        ? 'opacity-75 cursor-not-allowed'
                                        : 'hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 