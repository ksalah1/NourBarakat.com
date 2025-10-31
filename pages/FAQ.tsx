
import React, { useState } from 'react';
import { faqItems } from '../data/faq';
import { FaPlus, FaMinus, FaQuestionCircle, FaCarCrash, FaMoneyBillWave, FaFileSignature, FaUsers, FaHouseUser } from 'react-icons/fa';
import SEO from '../components/SEO';

const FAQItemComponent: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-right p-5 md:p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-base md:text-lg font-semibold text-gray-800 pe-4">{item.question}</h3>
        <span className={`text-blue-700 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
          {isOpen ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 bg-gradient-to-b from-gray-50 to-white">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">{item.answer}</p>
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

  // Group FAQs by category
  const categories = [
    { id: 'general', title: 'أسئلة عامة', icon: FaQuestionCircle, color: 'blue' },
    { id: 'insurance', title: 'قضايا التأمين والحوادث', icon: FaCarCrash, color: 'red' },
    { id: 'debt', title: 'تحصيل الديون', icon: FaMoneyBillWave, color: 'green' },
    { id: 'contracts', title: 'مراجعة العقود', icon: FaFileSignature, color: 'purple' },
    { id: 'labor', title: 'القضايا العمالية', icon: FaUsers, color: 'indigo' },
    { id: 'rental', title: 'قضايا الإيجار', icon: FaHouseUser, color: 'orange' },
  ];

  const getCategoryItems = (categoryId: string) => {
    return faqItems.filter(item => item.category === categoryId);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; icon: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-600' },
      red: { bg: 'bg-red-100', text: 'text-red-800', icon: 'text-red-600' },
      green: { bg: 'bg-green-100', text: 'text-green-800', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', icon: 'text-indigo-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-800', icon: 'text-orange-600' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-gray-50">
      <SEO
        title="أسئلة شائعة"
        description="إجابات شاملة على الأسئلة الشائعة حول خدمات المحامية نور بركات في الأردن: التأمين، تحصيل الديون، العقود، قانون العمل، والإيجار. احصل على إجابات واضحة لأسئلتك القانونية."
        keywords="أسئلة قانونية الأردن، استشارات قانونية، رسوم المحامي، مدة القضايا، قانون العمل، تحصيل ديون، مراجعة عقود، قضايا إيجار"
        canonicalUrl="https://nourbarakat.com/faq"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أسئلة شائعة</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              إجابات مفصلة على الأسئلة الأكثر شيوعاً حول خدماتنا القانونية
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-12">

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryItems = getCategoryItems(category.id);
            const colors = getColorClasses(category.color);
            const startIndex = faqItems.findIndex(item => item.category === category.id);

            return categoryItems.length > 0 ? (
              <div key={category.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Category Header */}
                <div className={`${colors.bg} p-4 md:p-6 border-b border-gray-200`}>
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white flex items-center justify-center ${colors.icon}`}>
                      <category.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h2 className={`ms-4 text-xl md:text-2xl font-bold ${colors.text}`}>
                      {category.title}
                    </h2>
                    <span className={`ms-auto ${colors.text} font-semibold text-sm`}>
                      {categoryItems.length} {categoryItems.length === 1 ? 'سؤال' : 'أسئلة'}
                    </span>
                  </div>
                </div>

                {/* Category FAQs */}
                <div>
                  {categoryItems.map((item, index) => {
                    const globalIndex = faqItems.indexOf(item);
                    return (
                      <FAQItemComponent
                        key={globalIndex}
                        item={item}
                        isOpen={openIndex === globalIndex}
                        onClick={() => handleToggle(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null;
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-base md:text-lg mb-6 text-blue-100">
            تواصل معنا الآن للحصول على استشارة مجانية وإجابات مفصلة على جميع استفساراتك القانونية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/962799262786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 me-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              راسلنا على واتساب
            </a>
            <a
              href="tel:+962799262786"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition duration-300"
            >
              <svg className="w-5 h-5 me-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
