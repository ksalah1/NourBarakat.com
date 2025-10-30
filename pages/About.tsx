
import React from 'react';
import { FaGavel, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <SEO
        title="عن المكتب"
        description="تعرف على مكتب نور بركات للمحاماة - فريق قانوني متخصص يقدم خدمات احترافية في الأردن مع التزام بالنزاهة، التركيز على العميل، والخبرة المهنية العالية."
        keywords="عن نور بركات، محامي محترف، مكتب محاماة موثوق، خبرة قانونية، محامي الأردن"
        canonicalUrl="https://ksalah1.github.io/NourBarakat.com/#/about"
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/id/17/800/600" // Placeholder for a professional photo
              alt="المحامية نور بركات" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">عن المحامية نور بركات</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              محامية أردنية متخصصة في تقديم الاستشارات والخدمات القانونية للأفراد والشركات. أؤمن بأن العدالة ليست مجرد مهنة، بل هي رسالة تتطلب التفاني والخبرة والالتزام الكامل بالدفاع عن حقوق الموكلين. هدفي هو تقديم حلول قانونية عملية وفعالة، مبنية على فهم عميق للقانون الأردني واحتياجات كل موكل على حدة.
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              نسعى في مكتبنا إلى بناء علاقات طويلة الأمد مع موكلينا قائمة على الثقة والشفافية، ونلتزم بتقديم خدماتنا بأعلى معايير المهنية والأخلاق.
            </p>
          </div>
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">قيمنا الأساسية</h2>
                 <p className="text-gray-600 mt-4 text-lg">المبادئ التي توجه عملنا اليومي.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                    <FaBalanceScale className="h-12 w-12 mx-auto text-blue-800 mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">النزاهة والعدالة</h3>
                    <p className="text-gray-600">نلتزم بأعلى معايير النزاهة في جميع تعاملاتنا، ونسعى لتحقيق العدالة لموكلينا بكل الوسائل القانونية المتاحة.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-lg">
                    <FaHandshake className="h-12 w-12 mx-auto text-blue-800 mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">التركيز على الموكل</h3>
                    <p className="text-gray-600">نضع مصلحة موكلينا أولاً، ونعمل بشفافية كاملة لضمان رضاهم وتحقيق أفضل النتائج الممكنة لقضاياهم.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-lg">
                    <FaGavel className="h-12 w-12 mx-auto text-blue-800 mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">الخبرة والاحترافية</h3>
                    <p className="text-gray-600">نعتمد على خبرتنا القانونية العميقة ومعرفتنا المحدثة بالقوانين لتقديم استشارات وخدمات احترافية وموثوقة.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
