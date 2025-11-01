
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaWhatsapp, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO
        title="الصفحة غير موجودة - 404"
        description="عذراً، الصفحة التي تبحث عنها غير موجودة. تصفح خدماتنا القانونية ومقالاتنا أو تواصل معنا للمساعدة."
        canonicalUrl="https://nourbarakat.com/404"
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Error Icon and Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-6">
              <FaExclamationTriangle className="text-5xl md:text-6xl text-blue-600" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              عذراً، الصفحة غير موجودة
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              الصفحة التي تبحث عنها قد تكون تم نقلها أو حذفها أو ربما كان هناك خطأ في الرابط.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              صفحات مفيدة قد تهمك
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FaHome className="text-xl text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">الصفحة الرئيسية</h4>
                  <p className="text-sm text-gray-600">العودة إلى الصفحة الرئيسية</p>
                </div>
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FaSearch className="text-xl text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">الخدمات القانونية</h4>
                  <p className="text-sm text-gray-600">تصفح خدماتنا المتخصصة</p>
                </div>
              </Link>

              <Link
                to="/articles"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <FaSearch className="text-xl text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">المقالات القانونية</h4>
                  <p className="text-sm text-gray-600">مقالات ونصائح قانونية</p>
                </div>
              </Link>

              <Link
                to="/faq"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <FaSearch className="text-xl text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">أسئلة شائعة</h4>
                  <p className="text-sm text-gray-600">إجابات على الأسئلة الشائعة</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              هل تحتاج إلى مساعدة؟
            </h3>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              تواصل معنا للحصول على استشارة قانونية مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/962799262786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-800 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg"
              >
                <FaWhatsapp className="me-3 h-6 w-6 text-green-600" />
                راسلنا على واتساب
              </a>
              <a
                href="tel:+962799262786"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition duration-300"
              >
                <FaPhone className="me-3 h-5 w-5" />
                اتصل الآن: 079 926 2786
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
