
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FaArrowLeft } from 'react-icons/fa';
import { CTAButtons } from '../components/CTAButtons';
import SEO from '../components/SEO';
import { LocalBusinessSchema, AttorneySchema } from '../components/StructuredData';

const Home: React.FC = () => {
  return (
    <div>
      <SEO
        title="الصفحة الرئيسية"
        description="المحامية نور بركات في الأردن - خدمات قانونية احترافية متخصصة في قضايا التأمين، تحصيل الديون، مراجعة العقود، قانون العمل، وقضايا الإيجار. استشارة قانونية مجانية. +14 عاماً من الخبرة."
        keywords="محامية الأردن، نور بركات، محامية عمان، قضايا تأمين، تحصيل ديون، عقود، قانون عمل، قضايا إيجار، محامية متخصصة، خدمات قانونية"
        canonicalUrl="https://nourbarakat.com/"
      />
      <LocalBusinessSchema />
      <AttorneySchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">المحامية نور بركات</h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            خدمات قانونية احترافية لحماية حقوقكم وتحقيق مصالحكم في الأردن
          </p>
          <p className="text-md md:text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            ✓ استشارة قانونية مجانية &nbsp;&nbsp; ✓ خبرة واسعة &nbsp;&nbsp; ✓ متاح 7 أيام في الأسبوع
          </p>
          <CTAButtons layout="horizontal" showAll={false} />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدماتنا القانونية</h2>
            <p className="text-gray-600 mt-4 text-lg">نحن متخصصون في مجموعة واسعة من القضايا لخدمة الأفراد والشركات.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-6 mx-auto">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.summary}</p>
                 <Link to="/services" state={{ focusId: service.id }} className="font-semibold text-blue-700 hover:text-blue-900 flex items-center justify-center">
                  اقرأ المزيد <FaArrowLeft className="ms-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">هل لديك قضية قانونية؟</h2>
            <p className="text-gray-700 text-lg md:text-xl mb-4 max-w-3xl mx-auto font-medium">
              لا تتردد في التواصل معنا. نحن هنا لنستمع إليك ونقدم لك أفضل الحلول القانونية الممكنة.
            </p>
            <p className="text-gray-600 text-md mb-10 max-w-2xl mx-auto">
              احصل على استشارة قانونية مجانية الآن واتخذ الخطوة الأولى لحماية حقوقك
            </p>
            <CTAButtons layout="horizontal" showAll={true} className="max-w-4xl mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
