
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { articles } from '../data/articles';
import { FaCheckCircle, FaWhatsapp, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

// Mapping of service IDs to related article IDs
const serviceArticleMap: Record<string, string[]> = {
  'vehicle-insurance': ['1', '4'],
  'financial-claims': ['2', '5', '9'],
  'contract-review': ['3', '6'],
  'labor-disputes': ['7', '10'],
  'landlord-tenant': ['8']
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">الخدمة غير موجودة</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            العودة إلى الخدمات
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles for this service
  const relatedArticleIds = id ? serviceArticleMap[id] || [] : [];
  const relatedArticles = articles.filter(article => relatedArticleIds.includes(article.id));

  return (
    <div className="bg-gray-50">
      <SEO
        title={`${service.title} - الخدمات القانونية`}
        description={service.summary}
        keywords={`${service.title}، خدمات قانونية، محامية عمان، استشارات قانونية الأردن`}
        canonicalUrl={`https://nourbarakat.com/services/${service.id}`}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <service.icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {service.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Back to services link */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <FaArrowRight className="me-2" />
              العودة إلى جميع الخدمات
            </Link>
          </div>

          {/* Service Content */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="space-y-8">
                {service.details.map((detail, index) => (
                  <div key={index}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {detail.title}
                    </h2>
                    <ul className="space-y-3">
                      {detail.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <FaCheckCircle className="text-blue-600 h-5 w-5 mt-1 me-3 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {index < service.details.length - 1 && (
                      <hr className="mt-8 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                مقالات ذات صلة
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.id}`}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <FaCalendarAlt className="text-blue-600" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span>اقرأ المزيد</span>
                      <FaArrowRight className="mr-2 text-xs" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              هل تحتاج إلى هذه الخدمة؟
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة قانونية متخصصة وتقييم دقيق لحالتك
            </p>
            <a
              href={`https://wa.me/962799262786?text=مرحباً، أود الاستفسار عن خدمة: ${service.title}`}
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
    </div>
  );
};

export default ServiceDetail;
