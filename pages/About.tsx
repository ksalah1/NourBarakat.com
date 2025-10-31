
import React from 'react';
import { FaGavel, FaHandshake, FaBalanceScale, FaGraduationCap, FaBriefcase, FaCertificate, FaUsers, FaAward, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const education = [
    {
      degree: 'ماجستير في القانون',
      institution: 'جامعة العلوم الإسلامية',
      year: '2026',
    },
    {
      degree: 'بكالوريوس في القانون',
      institution: 'جامعة آل البيت - الأردن',
      year: '2009',
    }
  ];

  const experience = [
    { years: '2023 - 2025', company: 'شركة التأمين الوطنية', position: 'محامية', duration: '2.5 سنوات' },
    { years: '2017 - 2019', company: 'الشركة الأردنية الفرنسية للتأمين', position: 'محامية', duration: 'سنتان' },
    { years: '2015 - 2016', company: 'شركة المتوسط والخليج للتأمين', position: 'محامية', duration: 'سنة' },
    { years: '2012 - 2015', company: 'الشركة الأردنية الإماراتية للتكافل', position: 'محامية', duration: '3 سنوات' },
    { years: '2011 - 2012', company: 'شركة فيلادلفيا للتأمين', position: 'محامية', duration: 'سنة' },
  ];

  const additionalExperience = [
    'مكتب محاماة خاص منذ 2011 ',
    'مستشارة قانونية للشركات التالية: شركة الاضافة لادارة الممتلكات، شركة جودنس كير لتطوير وتصنيع الأدوية، شركة مياه على الطريق ',

  ];

  const courses = [
    { year: '2024', title: 'دورة متقدمة في التحكيم الدولي', institution: 'الاتحاد الاردني لشركات التأمين' },
    { year: '2014', title: 'جرائم التشهير الإلكترونية', institution: 'نقابة المحامين الأردنيين' },
    { year: '2012', title: 'التحكيم', institution: 'نقابة المحامين الأردنيين' },
    { year: '2012', title: 'حقوق المرأة والطفل في القانون الأردني', institution: 'المركز الوطني لحقوق الإنسان' },
    { year: '2012', title: 'مناهضة التعذيب للمحامين الشباب', institution: 'المركز الوطني لحقوق الإنسان' },
    { year: '2011', title: 'التطبيقات العملية للإجراءات المدنية والجزائية', institution: 'نقابة المحامين الأردنيين' },
    { year: '2011', title: 'قضايا اللاجئين وحقوق الإنسان', institution: 'المركز الوطني لحقوق الإنسان' },
  ];

  const communityWork = [
    { icon: FaUsers, title: 'ورش عمل للشباب', description: 'إعطاء دورات لطلاب المدارس حول تحقيق النجاح الأكاديمي' },
    { icon: FaHandshake, title: 'العمل التطوعي', description: 'ورش عمل لدى جمعية التكافل الخيرية حول أسس اختيار شريك الحياة' },
    { icon: FaCertificate, title: 'القانون الدولي', description: 'ورشة عمل تدريبية بعنوان القانون الدولي للاجئين' },
  ];

  return (
    <div className="bg-gray-50">
      <SEO
        title="عن المحامية"
        description="المحامية نور بركات - أكثر من 14 عاماً من الخبرة في قانون التأمين والقضايا المدنية. عضو نقابة المحامين الأردنيين رقم 16872. حاصلة على بكالوريوس القانون وتتابع درجة الماجستير."
        keywords="نور بركات، محامية أردنية، خبيرة تأمين، قانون الأردن، نقابة المحامين، محامية متخصصة"
        canonicalUrl="https://nourbarakat.com/about"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">عن المحامية</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              أكثر من 14 عاماً من الخبرة القانونية المتخصصة في قانون التأمين والقضايا المدنية
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">نبذة عني</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              محامية أردنية متخصصة في تقديم الاستشارات والخدمات القانونية للأفراد والشركات. أؤمن بأن العدالة ليست مجرد مهنة، بل هي رسالة تتطلب التفاني والخبرة والالتزام الكامل بالدفاع عن حقوق الموكلين.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              مع خبرة تزيد عن 14 عاماً في قطاع التأمين، تخصصت في قضايا التأمين على المركبات، الحوادث المرورية، وتحصيل الديون. كما أقدم خدمات قانونية شاملة في مجالات قانون العمل، العقود التجارية، وقضايا الإيجار والإخلاء.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              هدفي هو تقديم حلول قانونية عملية وفعالة، مبنية على فهم عميق للقانون الأردني واحتياجات كل موكل على حدة. أسعى إلى بناء علاقات طويلة الأمد مع موكليني قائمة على الثقة والشفافية.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">المؤهلات الأكاديمية</h2>
            <p className="text-gray-600 text-lg">التحصيل العلمي والشهادات الأكاديمية</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${edu.status === 'ongoing' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <FaGraduationCap className={`text-2xl ${edu.status === 'ongoing' ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
                    {edu.grade && <p className="text-gray-600 mb-1">التقدير: {edu.grade}</p>}
                    <p className="text-gray-500">{edu.year}</p>
                    {edu.status === 'ongoing' && (
                      <span className="inline-block mt-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        قيد الدراسة
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الخبرة المهنية في شركات التأمين</h2>
            <p className="text-gray-600 text-lg">مسيرة مهنية ممتدة لأكثر من 14 عاماً في قطاع التأمين</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              {experience.map((exp, index) => (
                <div key={index} className="relative mb-8 md:pr-20">
                  {/* Timeline dot */}
                  <div className="absolute right-4 top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{exp.company}</h3>
                      <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaBriefcase className="text-blue-600" />
                      <span className="font-semibold">{exp.position}</span>
                    </div>
                    <p className="text-gray-500">{exp.years}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Experience */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">خبرات إضافية</h3>
              <div className="grid gap-4">
                {additionalExperience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{exp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Training */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الدورات والتدريب المهني</h2>
            <p className="text-gray-600 text-lg">شهادات تدريبية متخصصة من نقابة المحامين والمركز الوطني لحقوق الإنسان</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {course.year}
                  </div>
                  <FaCertificate className="text-yellow-500 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">المشاركة المجتمعية والقيادة</h2>
            <p className="text-gray-600 text-lg">الالتزام بخدمة المجتمع وتطوير الشباب</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityWork.map((work, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <work.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{work.title}</h3>
                <p className="text-gray-600 leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">القيم الأساسية</h2>
            <p className="text-gray-600 text-lg">المبادئ التي توجه عملنا اليومي</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <FaBalanceScale className="h-16 w-16 mx-auto text-blue-800 mb-4"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">النزاهة والعدالة</h3>
              <p className="text-gray-700 leading-relaxed">
                نلتزم بأعلى معايير النزاهة في جميع تعاملاتنا، ونسعى لتحقيق العدالة لموكلينا بكل الوسائل القانونية المتاحة.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <FaHandshake className="h-16 w-16 mx-auto text-green-800 mb-4"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">التركيز على الموكل</h3>
              <p className="text-gray-700 leading-relaxed">
                نضع مصلحة موكلينا أولاً، ونعمل بشفافية كاملة لضمان رضاهم وتحقيق أفضل النتائج الممكنة لقضاياهم.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <FaGavel className="h-16 w-16 mx-auto text-purple-800 mb-4"/>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">الخبرة والاحترافية</h3>
              <p className="text-gray-700 leading-relaxed">
                نعتمد على خبرتنا القانونية العميقة ومعرفتنا المحدثة بالقوانين لتقديم استشارات وخدمات احترافية وموثوقة.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج إلى استشارة قانونية؟</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            استفد من خبرتي الممتدة لأكثر من 14 عاماً في المجال القانوني. تواصل معي اليوم للحصول على استشارة مجانية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/962799262786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-800 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 me-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              راسلني على واتساب
            </a>
            <a
              href="tel:+962799262786"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition duration-300"
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

export default About;
