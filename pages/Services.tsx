
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const Services: React.FC = () => {
    const location = useLocation();
    const { focusId } = (location.state as { focusId?: string }) || {};
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (focusId) {
            const index = services.findIndex(s => s.id === focusId);
            if (index !== -1 && serviceRefs.current[index]) {
                serviceRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [focusId]);

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
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">الخدمات القانونية</h1>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            خدمات قانونية متخصصة في مجالات التأمين والقانون المدني
                        </p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-5xl mx-auto space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={el => serviceRefs.current[index] = el}
                            className="scroll-mt-24 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Service Header */}
                            <div className="p-6 md:p-8 border-b border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600">
                                            {service.summary}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {service.details.map((detail, detailIndex) => (
                                        <div key={detailIndex}>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                                {detail.title}
                                            </h3>
                                            <ul className="space-y-2">
                                                {detail.points.slice(0, 3).map((point, pointIndex) => (
                                                    <li key={pointIndex} className="flex items-start text-sm">
                                                        <FaCheckCircle className="text-blue-600 h-4 w-4 mt-0.5 me-2 flex-shrink-0" />
                                                        <span className="text-gray-700">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
