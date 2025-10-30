
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaCalendarAlt, FaComments } from 'react-icons/fa';

interface CTAButtonsProps {
  layout?: 'horizontal' | 'vertical' | 'grid';
  showAll?: boolean;
  className?: string;
}

export const CTAButtons: React.FC<CTAButtonsProps> = ({
  layout = 'horizontal',
  showAll = true,
  className = ''
}) => {
  const phoneNumber = '962799262786';
  const whatsappMessage = 'مرحباً، أود الاستفسار عن خدماتكم القانونية';

  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-4 justify-center',
    vertical: 'flex flex-col gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-4'
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {/* Book Free Consultation */}
      <Link
        to="/contact"
        className="flex items-center justify-center bg-blue-700 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300 text-lg shadow-lg hover:shadow-xl"
      >
        <FaCalendarAlt className="me-2" />
        احجز استشارة مجانية
      </Link>

      {/* WhatsApp Contact */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 text-lg shadow-lg hover:shadow-xl"
      >
        <FaWhatsapp className="me-2" />
        تواصل عبر واتساب
      </a>

      {showAll && (
        <>
          {/* Click to Call */}
          <a
            href={`tel:+${phoneNumber}`}
            className="flex items-center justify-center bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-900 transition duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            <FaPhone className="me-2" />
            اتصل الآن
          </a>

          {/* Get Legal Opinion */}
          <Link
            to="/contact"
            className="flex items-center justify-center bg-white text-blue-700 font-bold py-3 px-6 rounded-full border-2 border-blue-700 hover:bg-blue-50 transition duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            <FaComments className="me-2" />
            احصل على رأي قانوني
          </Link>
        </>
      )}
    </div>
  );
};

// Individual CTA Button Components for specific use cases

export const BookConsultationButton: React.FC<{ className?: string; fullWidth?: boolean }> = ({
  className = '',
  fullWidth = false
}) => {
  return (
    <Link
      to="/contact"
      className={`flex items-center justify-center bg-blue-700 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition duration-300 text-lg shadow-lg hover:shadow-xl ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <FaCalendarAlt className="me-2" />
      احجز استشارة مجانية
    </Link>
  );
};

export const WhatsAppButton: React.FC<{ className?: string; fullWidth?: boolean }> = ({
  className = '',
  fullWidth = false
}) => {
  const phoneNumber = '962799262786';
  const whatsappMessage = 'مرحباً، أود الاستفسار عن خدماتكم القانونية';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 text-lg shadow-lg hover:shadow-xl ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <FaWhatsapp className="me-2" />
      تواصل عبر واتساب
    </a>
  );
};

export const CallNowButton: React.FC<{ className?: string; fullWidth?: boolean }> = ({
  className = '',
  fullWidth = false
}) => {
  const phoneNumber = '962799262786';

  return (
    <a
      href={`tel:+${phoneNumber}`}
      className={`flex items-center justify-center bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-900 transition duration-300 text-lg shadow-lg hover:shadow-xl ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <FaPhone className="me-2" />
      اتصل الآن: +962 79 926 2786
    </a>
  );
};

export default CTAButtons;
