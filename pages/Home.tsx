
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FaArrowLeft } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">مكتب نور بركات للمحاماة</h1>
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            نقدم لكم الدعم القانوني الاحترافي لحماية حقوقكم وتحقيق مصالحكم في الأردن.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 text-lg"
          >
            اطلب استشارة قانونية
          </Link>
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">هل لديك قضية قانونية؟</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">لا تتردد في التواصل معنا. نحن هنا لنستمع إليك ونقدم لك أفضل الحلول القانونية الممكنة.</p>
            <Link to="/contact" className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition duration-300 text-lg">
                تواصل معنا الآن
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
