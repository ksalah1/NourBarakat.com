
import React, { useState } from 'react';
import { faqItems } from '../data/faq';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SEO from '../components/SEO';

const FAQItemComponent: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-right p-6 focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
        <span className="text-blue-700">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50">
          <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <SEO
        title="أسئلة شائعة"
        description="إجابات على الأسئلة الشائعة حول خدمات مكتب نور بركات للمحاماة. تعرف على رسوم الاستشارة، مدة القضايا، السرية، والخدمات المتاحة للأفراد والشركات."
        keywords="أسئلة قانونية، استشارات قانونية، رسوم المحامي، مدة القضايا، خدمات قانونية"
        canonicalUrl="https://ksalah1.github.io/NourBarakat.com/#/faq"
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">أسئلة شائعة</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            نجيب هنا على أكثر الأسئلة التي تردنا لمساعدتك في الحصول على المعلومات التي تحتاجها بسرعة.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md border">
          {faqItems.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
