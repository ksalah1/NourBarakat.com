
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaAward } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center mb-6 group">
              <FaBalanceScale className="h-7 w-7 me-2 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-xl font-medium">المحامية نور بركات</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              خدمات قانونية متخصصة في قضايا التأمين والقانون المدني
            </p>
            <div className="flex items-start gap-2 text-slate-400 text-xs">
              <FaAward className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>عضو نقابة المحامين الأردنيين<br />رقم التسجيل: 16872</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium mb-4 text-white">الصفحات</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">الخدمات</Link></li>
              <li><Link to="/articles" className="text-slate-400 hover:text-white text-sm transition-colors">المقالات</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">من نحن</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white text-sm transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2">
            <h3 className="text-base font-medium mb-4 text-white">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                <span>أبو نصير - الشارع الرئيسي - بناية 71<br />عمان، الأردن</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <FaPhone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <a
                  href="tel:+962799262786"
                  className="hover:text-white transition-colors"
                  dir="ltr"
                >
                  +962 79 926 2786
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 flex-shrink-0 text-blue-400" />
                <a
                  href="https://wa.me/962799262786?text=مرحباً، أود الاستفسار عن الخدمات القانونية"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                  dir="ltr"
                >
                  +962 79 926 2786
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} المحامية نور بركات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
