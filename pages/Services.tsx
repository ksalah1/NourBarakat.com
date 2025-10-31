
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const Services: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <SEO
                title="الخدمات القانونية - محامية في عمان"
                description="خدمات قانونية احترافية في عمان - قضايا التأمين، تحصيل الديون، صياغة ومراجعة العقود، قانون العمل، قضايا الإيجار. محامية متخصصة بخبرة +14 عاماً. استشارات قانونية للأفراد والشركات في الأردن"
                keywords="خدمات قانونية عمان، محامي قضايا تأمين، تحصيل ديون الأردن، صياغة عقود، محامي قانون عمل عمان، قضايا إيجار، استشارات قانونية، محامي شركات، خدمات قانونية للأفراد"
                canonicalUrl="https://nourbarakat.com/services"
            />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">الخدمات القانونية</h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            خدمات قانونية متخصصة في مجالات التأمين والقانون المدني
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col"
                        >
                            {/* Service Icon & Title */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4">
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
                                    {service.title}
                                </h2>
                            </div>

                            {/* Service Summary */}
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-gray-600 leading-relaxed text-center mb-6 flex-grow">
                                    {service.summary}
                                </p>

                                {/* Learn More Link */}
                                <div className="flex items-center justify-center text-blue-600 font-medium">
                                    <span className="text-sm">المزيد من التفاصيل</span>
                                    <FaArrowLeft className="mr-2 text-xs" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        استشارة قانونية
                    </h2>
                    <p className="text-blue-100 mb-8">
                        للحصول على استشارة قانونية متخصصة، تواصل معنا
                    </p>
                    <a
                        href="https://wa.me/962799262786?text=مرحباً، أود الاستفسار عن الخدمات القانونية"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white text-blue-900 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300"
                    >
                        <FaWhatsapp className="me-2 text-xl" />
                        تواصل عبر واتساب
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
