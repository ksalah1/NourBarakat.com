
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide tooltip after 10 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const whatsappNumber = '962799262786';
  const defaultMessage = 'مرحباً، أود الاستفسار عن خدماتكم القانونية';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="hidden md:flex items-center bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 animate-bounce">
            <p className="text-sm font-medium text-gray-800 ms-2">تواصل معنا عبر واتساب!</p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 me-2"
              aria-label="إغلاق الرسالة"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="تواصل عبر واتساب"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
