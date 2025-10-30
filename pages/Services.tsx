
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import { FaCheckCircle } from 'react-icons/fa';
import { CTAButtons } from '../components/CTAButtons';

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
        <div className="bg-white py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">خدماتنا القانونية</h1>
                    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                        نقدم مجموعة متكاملة من الخدمات القانونية المصممة لحماية حقوقك وتحقيق أهدافك، بخبرة واحترافية عالية.
                    </p>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={service.id} ref={el => serviceRefs.current[index] = el} className="border-b pb-12 last:border-b-0">
                            <div className="flex items-center mb-6">
                                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <div className="ms-4">
                                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                                    <p className="text-md text-gray-500">{service.summary}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {service.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{detail.title}</h3>
                                        <ul className="space-y-3">
                                            {detail.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex items-start">
                                                    <FaCheckCircle className="text-green-500 h-5 w-5 mt-1 me-3 flex-shrink-0" />
                                                    <span className="text-gray-700">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl">
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
