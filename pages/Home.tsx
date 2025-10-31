
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { articles } from '../data/articles';
import { FaArrowLeft, FaAward, FaBriefcase, FaUsers, FaCheckCircle, FaBalanceScale, FaShieldAlt, FaClock, FaHandshake, FaGavel, FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import { CTAButtons } from '../components/CTAButtons';
import SEO from '../components/SEO';
import { LocalBusinessSchema, AttorneySchema } from '../components/StructuredData';

const Home: React.FC = () => {
  const stats = [
    { icon: FaBriefcase, value: '14+', label: 'عاماً من الخبرة', color: 'blue' },
    { icon: FaAward, value: '16872', label: 'رقم التسجيل بالنقابة', color: 'yellow' },
    { icon: FaBalanceScale, value: 'بكالوريوس', label: 'قانون - جيد جداً', color: 'purple' },
    { icon: FaGavel, value: 'ماجستير', label: 'قانون - قيد الإنجاز', color: 'green' },
  ];

  const whyChoose = [
    {
      icon: FaShieldAlt,
      title: 'خبرة متخصصة',
      description: '+14 عاماً من الخبرة المتخصصة في قانون التأمين والقضايا المدنية في الأردن',
    },
    {
      icon: FaBalanceScale,
      title: 'احترافية عالية',
      description: 'عضو نقابة المحامين الأردنيين، حاصلة على بكالوريوس القانون وتتابع درجة الماجستير',
    },
    {
      icon: FaHandshake,
      title: 'التزام ومصداقية',
      description: 'نلتزم بأعلى معايير الأخلاقيات المهنية ونحافظ على السرية التامة لمعلومات العملاء',
    },
    {
      icon: FaClock,
      title: 'تواصل فعال',
      description: 'نستقبل استفساراتكم عبر الهاتف أو واتساب ونسعى للرد في أقرب وقت ممكن',
    },
  ];

  const process = [
    { step: '1', title: 'تواصل معنا', description: 'اتصل بنا عبر الهاتف أو واتساب' },
    { step: '2', title: 'استشارة أولية', description: 'نستمع لتفاصيل قضيتك ونفهم احتياجاتك القانونية' },
    { step: '3', title: 'خطة قانونية', description: 'نضع استراتيجية قانونية واضحة ومناسبة' },
    { step: '4', title: 'تنفيذ ومتابعة', description: 'نعمل على قضيتك بكل احترافية ونتابعها بدقة' },
  ];

  return (
    <div>
      <SEO
        title="الصفحة الرئيسية"
        description="المحامية نور بركات في الأردن - خدمات قانونية احترافية متخصصة في قضايا التأمين، تحصيل الديون، مراجعة العقود، قانون العمل، وقضايا الإيجار. +14 عاماً من الخبرة القانونية."
        keywords="محامية الأردن، نور بركات، محامية عمان، قضايا تأمين، تحصيل ديون، عقود، قانون عمل، قضايا إيجار، محامية متخصصة، خدمات قانونية"
        canonicalUrl="https://nourbarakat.com/"
      />
      <LocalBusinessSchema />
      <AttorneySchema />

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Credentials Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                <FaAward className="text-yellow-400 text-xl" />
                <span className="text-sm md:text-base">نقابة المحامين الأردنيين #16872</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20">
                <FaBriefcase className="text-green-400 text-xl" />
                <span className="text-sm md:text-base">+14 عاماً من الخبرة القانونية</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                المحامية نور بركات
              </h1>
              <p className="text-xl md:text-3xl text-blue-100 mb-6 font-semibold">
                خبيرة قانونية متخصصة في قضايا التأمين والقانون المدني
              </p>
              <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                أحمي حقوقك القانونية مع محامية ذات خبرة +14 عاماً في أكبر شركات التأمين في الأردن.
                نعمل بكل احترافية والتزام لخدمة مصالحكم القانونية.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">خبرة +14 عاماً</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">التزام مهني عالٍ</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-lg">سرية تامة</span>
                </div>
              </div>

              <CTAButtons layout="horizontal" showAll={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}-100 mb-4`}>
                  <stat.icon className={`text-3xl text-${stat.color}-600`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              لماذا تختار المحامية نور بركات؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة قانونية متميزة مع التزام تام بحماية حقوقك وتحقيق أفضل النتائج
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">خدماتنا القانونية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خدمات قانونية شاملة ومتخصصة لحماية حقوقك في جميع المجالات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.summary}</p>
                <Link
                  to="/services"
                  state={{ focusId: service.id }}
                  className="font-semibold text-blue-700 hover:text-blue-900 flex items-center justify-center group-hover:gap-3 gap-2 transition-all"
                >
                  اقرأ المزيد
                  <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
            >
              عرض جميع الخدمات
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">كيف نعمل معك؟</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              عملية بسيطة وواضحة من الاستشارة الأولى حتى تحقيق النتائج
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-blue-400 opacity-30 -z-10" style={{ right: '-50%' }}></div>
                  )}

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <div className="bg-white text-blue-900 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">آخر المقالات القانونية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              رؤى قانونية ونصائح متخصصة لمساعدتك على فهم حقوقك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {article.id}
                    </div>
                    <FaFileAlt className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="text-blue-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      اقرأ المزيد
                      <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg"
            >
              عرض جميع المقالات
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              هل تحتاج إلى مساعدة قانونية؟
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              لا تترك حقوقك القانونية للصدفة
            </p>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              تواصل الآن مع محامية متخصصة مع +14 عاماً من الخبرة القانونية.
              نحن هنا لمساعدتك في حماية حقوقك والعمل على قضيتك بكل احترافية.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <FaBriefcase className="text-4xl text-yellow-400 mx-auto mb-3" />
                  <div className="font-bold text-lg">خبرة واسعة</div>
                  <div className="text-blue-200 text-sm">+14 عاماً في القانون</div>
                </div>
                <div>
                  <FaBalanceScale className="text-4xl text-green-400 mx-auto mb-3" />
                  <div className="font-bold text-lg">التزام مهني</div>
                  <div className="text-blue-200 text-sm">أعلى معايير الاحترافية</div>
                </div>
                <div>
                  <FaShieldAlt className="text-4xl text-blue-300 mx-auto mb-3" />
                  <div className="font-bold text-lg">سرية تامة</div>
                  <div className="text-blue-200 text-sm">حماية معلوماتك</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://wa.me/962799262786?text=مرحباً، أود الاستفسار عن خدماتكم القانونية"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition duration-300 text-xl shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="me-3 text-2xl" />
                تواصل عبر واتساب
              </a>
            </div>

            <p className="text-blue-200 mt-6 text-sm">
              💼 عضو نقابة المحامين الأردنيين #16872
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
