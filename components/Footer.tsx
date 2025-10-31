
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <FaBalanceScale className="h-8 w-8 me-3 text-blue-400" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">نور بركات</span>
            </Link>
            <p className="text-gray-400">
              محامية متخصصة في تقديم استشارات وخدمات قانونية موثوقة في الأردن.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li className="mb-2"><Link to="/services" className="hover:text-blue-400">خدماتنا</Link></li>
              <li className="mb-2"><Link to="/articles" className="hover:text-blue-400">مقالات قانونية</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-blue-400">من نحن</Link></li>
              <li className="mb-2"><Link to="/faq" className="hover:text-blue-400">أسئلة شائعة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="text-gray-300">
              <li className="flex items-center mb-3">
                <FaMapMarkerAlt className="w-5 h-5 me-3" />
                <span>ابو نصير - الشارع الرئيسي - بنايه ٧١</span>
              </li>
              <li className="flex items-center mb-3">
                <FaWhatsapp className="w-5 h-5 me-3" />
                <a href="https://wa.me/962799262786" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" dir="ltr">+962 79 926 2786</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} المحامية نور بركات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
