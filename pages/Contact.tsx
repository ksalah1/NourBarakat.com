import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact: React.FC = () => {

  return (
    <div className="bg-gray-50">
      <SEO
        title="تواصل معنا"
        description="تواصل مع المحامية نور بركات في عمان، الأردن. اتصل بنا على +962 79 926 2786 أو عبر واتساب. نقدم استشارات قانونية مجانية. عنواننا: ابو نصير - بنايه ٧١."
        keywords="اتصل بنا، محامية عمان، استشارة قانونية، نور بركات، محامية ابو نصير، رقم محامية الأردن"
        canonicalUrl="https://nourbarakat.com/contact"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              نحن هنا للإجابة على استفساراتك القانونية
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 mb-6 mx-auto">
              <FaMapMarkerAlt className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">العنوان</h3>
            <p className="text-gray-600 text-center">
              ابو نصير - الشارع الرئيسي<br />
              قرب الإشارة - فوق مطعم بوبايز<br />
              بنايه ٧١ - طابق ١ - مكتب ٣
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 mb-6 mx-auto">
              <FaPhone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">الهاتف</h3>
            <a
              href="tel:+962799262786"
              className="text-gray-600 hover:text-blue-700 text-center block mb-4 text-lg font-semibold"
              dir="ltr"
            >
              +962 79 926 2786
            </a>
            <a
              href="tel:+962799262786"
              className="w-full flex items-center justify-center bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300"
            >
              <FaPhone className="me-3 h-5 w-5" />
              اتصل الآن
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6 mx-auto">
              <FaWhatsapp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">واتساب</h3>
            <a
              href="https://wa.me/962799262786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 text-center block mb-4 text-lg font-semibold"
              dir="ltr"
            >
              +962 79 926 2786
            </a>
            <a
              href="https://wa.me/962799262786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="me-3 h-6 w-6" />
              راسلنا على واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
