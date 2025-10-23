import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam field
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'الاسم الكامل مطلوب.';
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'الموضوع مطلوب.';
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(''); // Reset status on new submission

    // Honeypot check for spam
    if (formData.honeypot) {
      console.log('Spam submission detected');
      // Silently fail without proceeding
      return;
    }

    if (validateForm()) {
      // Here you would typically handle form submission, e.g., send to an API endpoint.
      // For this static site, we'll just simulate a success message.
      console.log('Form data submitted:', formData);
      setStatus('شكراً لتواصلك! تم استلام رسالتك وسنرد عليك في أقرب وقت ممكن.');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setErrors({});
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">تواصل معنا</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك. يمكنك ملء النموذج أدناه أو استخدام معلومات الاتصال المباشرة.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-8 w-8 text-blue-700 mt-1 me-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">العنوان</h3>
                  <p className="text-gray-600">ابو نصير- الشارع الرئيسي - قرب الإشارة - فوق مطعم بوبايز - بنايه ٧١ - طابق ١ - مكتب ٣</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaWhatsapp className="h-8 w-8 text-blue-700 mt-1 me-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">واتساب</h3>
                  <a href="https://wa.me/962782904344" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700" dir="ltr">+962 7 8290 4344</a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="h-8 w-8 text-blue-700 mt-1 me-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                  <a href="mailto:nour@nourbarakat.com" className="text-gray-600 hover:text-blue-700">nour@nourbarakat.com</a>
                </div>
              </div>
               <div className="border-t pt-6">
                 <a 
                    href="https://wa.me/962782904344" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300"
                >
                    <FaWhatsapp className="me-3 h-6 w-6" />
                    أرسل رسالة عبر واتساب
                </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field for spam prevention, invisible to users */}
              <div className="absolute w-0 h-0 overflow-hidden">
                <label htmlFor="honeypot">Please leave this field blank</label>
                <input 
                  type="text" 
                  id="honeypot" 
                  name="honeypot" 
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1} 
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                  />
                  {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                  />
                  {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                />
                {errors.subject && <p id="subject-error" className="text-red-600 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">رسالتك</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300">
                  إرسال الرسالة
                </button>
              </div>
              {status && <p className="text-center text-green-600 bg-green-100 p-3 rounded-md mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
