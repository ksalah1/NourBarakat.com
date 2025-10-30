
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { FaCheckCircle, FaWhatsapp, FaPhone, FaArrowLeft } from 'react-icons/fa';
import { CTAButtons } from '../components/CTAButtons';
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

    // Define color schemes for each service
    const colorSchemes = [
        { primary: 'red', gradient: 'from-red-500 to-red-700', bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
        { primary: 'green', gradient: 'from-green-500 to-green-700', bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        { primary: 'purple', gradient: 'from-purple-500 to-purple-700', bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        { primary: 'indigo', gradient: 'from-indigo-500 to-indigo-700', bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
        { primary: 'orange', gradient: 'from-orange-500 to-orange-700', bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
    ];

    return (
        <div className="bg-gray-50">
            <SEO
                title="خدماتنا القانونية"
                description="خدمات قانونية شاملة من مكتب نور بركات: قضايا التأمين، تحصيل الديون، مراجعة العقود، النزاعات العمالية، وقضايا الإيجار. خبرة واحترافية في خدمة الأفراد والشركات."
                keywords="خدمات قانونية الأردن، محامي تأمين، تحصيل ديون، مراجعة عقود، قانون عمل، قضايا إيجار، استشارات قانونية"
                canonicalUrl="https://ksalah1.github.io/NourBarakat.com/#/services"
            />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">خدماتنا القانونية</h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            نقدم مجموعة متكاملة من الخدمات القانونية المتخصصة لحماية حقوقك وتحقيق أهدافك،
                            بخبرة واحترافية عالية وفهم عميق للقانون الأردني
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">5</div>
                                <div className="text-sm text-blue-200">خدمات قانونية</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">100+</div>
                                <div className="text-sm text-blue-200">قضية ناجحة</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">24/7</div>
                                <div className="text-sm text-blue-200">دعم متواصل</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="space-y-12 md:space-y-16">
                    {services.map((service, index) => {
                        const colors = colorSchemes[index % colorSchemes.length];
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={service.id}
                                ref={el => serviceRefs.current[index] = el}
                                className="scroll-mt-24"
                            >
                                {/* Service Card */}
                                <div className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${colors.border} border-2`}>
                                    {/* Service Header */}
                                    <div className={`bg-gradient-to-r ${colors.gradient} p-6 md:p-8`}>
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                            <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                                                <service.icon className={`h-8 w-8 md:h-10 md:w-10 ${colors.icon}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                                    {service.title}
                                                </h2>
                                                <p className="text-base md:text-lg text-white/90">
                                                    {service.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Details */}
                                    <div className="p-6 md:p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {service.details.map((detail, detailIndex) => (
                                                <div
                                                    key={detailIndex}
                                                    className={`${colors.bg} p-6 rounded-2xl border ${colors.border} hover:shadow-md transition-shadow duration-200`}
                                                >
                                                    <h3 className={`text-xl font-bold mb-4 ${colors.icon}`}>
                                                        {detail.title}
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {detail.points.map((point, pointIndex) => (
                                                            <li key={pointIndex} className="flex items-start">
                                                                <FaCheckCircle className={`${colors.icon} h-5 w-5 mt-1 me-3 flex-shrink-0`} />
                                                                <span className="text-gray-700 text-sm md:text-base leading-relaxed">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Service CTA */}
                                        <div className={`mt-8 bg-gradient-to-r ${colors.gradient} rounded-2xl p-6 md:p-8 text-white`}>
                                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                                <div className="text-center md:text-right flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                                                        هل تحتاج إلى مساعدة في {service.title}؟
                                                    </h3>
                                                    <p className="text-white/90">
                                                        تواصل معنا الآن للحصول على استشارة مجانية
                                                    </p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                                    <a
                                                        href="https://wa.me/962799262786"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg whitespace-nowrap"
                                                    >
                                                        <FaWhatsapp className="me-2 h-5 w-5 text-green-600" />
                                                        واتساب
                                                    </a>
                                                    <a
                                                        href="tel:+962799262786"
                                                        className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition duration-300 whitespace-nowrap"
                                                    >
                                                        <FaPhone className="me-2 h-4 w-4" />
                                                        اتصل
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-16 md:mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                        لماذا تختار مكتب نور بركات للمحاماة؟
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚖️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">خبرة متخصصة</h3>
                            <p className="text-gray-600">
                                فهم عميق للقانون الأردني وخبرة واسعة في مختلف المجالات القانونية
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">نهج شخصي</h3>
                            <p className="text-gray-600">
                                نعامل كل قضية بعناية خاصة ونقدم حلولاً مخصصة تناسب احتياجاتك
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">تواصل مستمر</h3>
                            <p className="text-gray-600">
                                نبقيك على اطلاع دائم بتطورات قضيتك ونجيب على استفساراتك فوراً
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز للبدء؟</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                        احصل على استشارة قانونية مجانية اليوم ودعنا نساعدك في حل قضيتك القانونية
                    </p>
                    <CTAButtons layout="horizontal" showAll={false} />
                </div>
            </div>
        </div>
    );
};

export default Services;
