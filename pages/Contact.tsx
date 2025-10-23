
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API endpoint.
    // For this static site, we'll just simulate a success message.
    console.log('Form data submitted:', formData);
    setStatus('شكراً لتواصلك! تم استلام رسالتك وسنرد عليك في أقرب وقت ممكن.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
                  <p className="text-gray-600">عمان, الأردن</p>
                  <p className="text-gray-600">(يرجى إضافة العنوان التفصيلي هنا)</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="h-8 w-8 text-blue-700 mt-1 me-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">الهاتف</h3>
                  <p className="text-gray-600" dir="ltr">+962 7 XX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="h-8 w-8 text-blue-700 mt-1 me-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                  <p className="text-gray-600">contact@nourbarakat.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">رسالتك</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300">
                  إرسال الرسالة
                </button>
              </div>
              {status && <p className="text-center text-green-600 bg-green-100 p-3 rounded-md">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
