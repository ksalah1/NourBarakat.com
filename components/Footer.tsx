
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <FaBalanceScale className="h-8 w-8 me-3 text-blue-400" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">نور بركات</span>
            </Link>
            <p className="text-gray-400">
              مكتب محاماة متخصص في تقديم استشارات وخدمات قانونية موثوقة في الأردن.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li className="mb-2"><Link to="/services" className="hover:text-blue-400">خدماتنا</Link></li>
              <li className="mb-2"><Link to="/articles" className="hover:text-blue-400">مقالات قانونية</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-blue-400">عن المكتب</Link></li>
              <li className="mb-2"><Link to="/faq" className="hover:text-blue-400">أسئلة شائعة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="text-gray-300">
              <li className="flex items-center mb-3">
                <FaMapMarkerAlt className="w-5 h-5 me-3" />
                <span>عمان, الأردن (العنوان الكامل)</span>
              </li>
              <li className="flex items-center mb-3">
                <FaPhone className="w-5 h-5 me-3" />
                <span>+962 7 XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 me-3" />
                <span>contact@nourbarakat.com</span>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="w-6 h-6"/></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="w-6 h-6"/></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="w-6 h-6"/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} مكتب نور بركات للمحاماة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
