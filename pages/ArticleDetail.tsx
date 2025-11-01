
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaUserEdit, FaCalendarAlt, FaArrowRight, FaWhatsapp, FaPhone } from 'react-icons/fa';
import SEO from '../components/SEO';
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">المقال غير موجود</h1>
        <Link to="/articles" className="text-blue-600 hover:underline mt-4 inline-block">
          العودة إلى قائمة المقالات
        </Link>
      </div>
    );
  }

  // Determine CTA based on article category
  const getCTAContent = () => {
    const id = article.id;

    // Employment-related articles (3, 7, 10)
    if (['3', '7', '10'].includes(id)) {
      return {
        title: 'هل لديك قضية أو استفسار حول قانون العمل؟',
        description: 'سواء كنت تواجه مشكلة في عقد العمل، فصل تعسفي، أو تأخر في الأجور - نحن هنا لمساعدتك. احصل على استشارة قانونية مجانية الآن.',
        bgColor: 'from-blue-600 to-blue-800'
      };
    }
    // Debt collection articles (2, 5, 9)
    else if (['2', '5', '9'].includes(id)) {
      return {
        title: 'هل لديك دين تحتاج لتحصيله أو دين تواجه صعوبة في سداده؟',
        description: 'نساعدك في تحصيل الديون المستحقة أو إعادة جدولة ديونك. تواصل معنا لتقييم مجاني لقضيتك واستشارة قانونية متخصصة.',
        bgColor: 'from-green-600 to-green-800'
      };
    }
    // Traffic accident article (1, 4)
    else if (['1', '4'].includes(id)) {
      return {
        title: 'تعرضت لحادث سير أو نزاع تأميني؟',
        description: 'احمِ حقوقك واحصل على التعويض الكامل الذي تستحقه. نوفر لك استشارة قانونية فورية ومجانية لتقييم قضيتك.',
        bgColor: 'from-red-600 to-red-800'
      };
    }
    // Contract-related article (6)
    else if (id === '6') {
      return {
        title: 'تحتاج إلى صياغة أو مراجعة عقد تجاري أو استثماري؟',
        description: 'لا تُوقع على عقد قبل مراجعته مع محامٍ متخصص. نقدم لك استشارة مجانية لمراجعة بنود العقد وحماية مصالحك.',
        bgColor: 'from-purple-600 to-purple-800'
      };
    }
    // Rental/eviction article (8)
    else if (id === '8') {
      return {
        title: 'تواجه قضية إيجار أو إخلاء؟',
        description: 'سواء كنت مالكاً أو مستأجراً، نحن نحمي حقوقك القانونية في قضايا الإيجار والإخلاء. استشارة مجانية لتقييم موقفك القانوني.',
        bgColor: 'from-indigo-600 to-indigo-800'
      };
    }
    // Default CTA
    return {
      title: 'هل تحتاج إلى استشارة قانونية؟',
      description: 'نحن هنا لمساعدتك في جميع القضايا القانونية. تواصل معنا الآن للحصول على استشارة مجانية وتقييم دقيق لقضيتك.',
      bgColor: 'from-blue-600 to-blue-800'
    };
  };

  // Get article-specific SEO keywords
  const getArticleKeywords = () => {
    const baseKeywords = 'محامية عمان، محامي الأردن، استشارات قانونية، نور بركات، قانون أردني';

    const keywordMap: Record<string, string> = {
      'vehicle-insurance-policy-importance': 'محامي تأمين مركبات عمان، بوليصة تأمين المركبات، تأمين السيارات الأردن، مطالبة تأمين مركبة، حوادث سيارات عمان',
      'legal-notice-debt-collection-jordan': 'محامي تحصيل ديون عمان، إجراءات تحصيل ديون الأردن، الإنذار العدلي الأردن، كاتب العدل عمان، مطالبات مالية',
      'employment-contract-essential-terms': 'محامي عقود عمل عمان، قانون العمل الأردني، بنود عقد العمل، حقوق العامل الأردن، عقد عمل في الأردن',
      'car-accident-legal-steps-jordan': 'محامي حوادث سيارات عمان، كيف أرفع دعوى تأمين مركبة الأردن، حادث سير الأردن، خطوات بعد حادث السير، محامي تأمين مركبات',
      'when-debt-becomes-collectible': 'محامي تحصيل ديون عمان، متى يصبح الدين قابل للتحصيل، مدة التقادم الأردن، دعوى تحصيل ديون، قانون مدني أردني',
      'commercial-contract-essential-clauses': 'محامي مراجعة عقود عمان، مراجعة اتفاقيات شركات، عقود تجارية الأردن، صياغة عقود، محامي عقود تجارية',
      'wrongful-termination-employee-rights': 'محامي منازعات عمالية عمان، الفصل التعسفي الأردن، حقوق العامل عمان، قضايا عمل الأردن، تعويض فصل تعسفي',
      'eviction-procedures-landlord-rights': 'قضايا إيجار عمان، محامي إخلاء عقار، إجراءات الإخلاء الأردن، محامي مستأجر مالك عمان، عقد إيجار الأردن',
      'debt-payment-delay-consequences': 'محامي تحصيل ديون عمان، تبعات تأخر سداد الديون، ديون تجارية الأردن، حجز تنفيذي، إجراءات تحصيل ديون',
      'unpaid-wages-legal-steps-jordan': 'محامي منازعات عمالية عمان، عدم دفع الأجور الأردن، حقوق العامل عمان، وزارة العمل الأردن، مستحقات عمالية'
    };

    return `${keywordMap[article.slug] || article.title}، ${baseKeywords}`;
  };

  const ctaContent = getCTAContent();

  // Convert article date to ISO format for schema
  const convertDateToISO = (dateStr: string): string => {
    const arabicMonths: Record<string, string> = {
      'يناير': '01', 'فبراير': '02', 'مارس': '03', 'أبريل': '04',
      'مايو': '05', 'يونيو': '06', 'يوليو': '07', 'أغسطس': '08',
      'سبتمبر': '09', 'أكتوبر': '10', 'نوفمبر': '11', 'ديسمبر': '12'
    };

    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = arabicMonths[parts[1]] || '01';
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div className="bg-gray-50">
      <SEO
        title={`${article.title} | محامية نور بركات`}
        description={`${article.summary} - استشارة قانونية متخصصة من محامية نور بركات في عمان، الأردن.`}
        keywords={getArticleKeywords()}
        canonicalUrl={`https://nourbarakat.com/articles/${article.slug}`}
      />
      <ArticleSchema
        title={article.title}
        description={article.summary}
        publishedDate={convertDateToISO(article.date)}
        author={article.author}
        category={article.title}
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://nourbarakat.com' },
          { name: 'المقالات', url: 'https://nourbarakat.com/articles' },
          { name: article.title, url: `https://nourbarakat.com/articles/${article.slug}` }
        ]}
      />

      {/* Article Header with gradient */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{article.title}</h1>
          <div className="flex items-center text-md text-blue-100 gap-6">
            <div className="flex items-center">
              <FaUserEdit className="me-2" />
              <span>بقلم: {article.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="me-2" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Article Summary */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed italic">
              {article.summary}
            </p>
          </div>

          {/* Article Content with Enhanced Styling */}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed
                       prose-headings:text-gray-900 prose-headings:font-bold
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-blue-200 prose-h2:text-blue-900
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-800
                       prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-blue-700
                       prose-p:mb-5 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[1.05rem]
                       prose-ul:my-6 prose-ul:text-gray-700 prose-ul:space-y-2
                       prose-ol:my-6 prose-ol:text-gray-700 prose-ol:space-y-3
                       prose-li:mb-3 prose-li:leading-relaxed prose-li:text-[1.05rem]
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:text-blue-700
                       [&_ul]:list-disc [&_ul]:mr-6 [&_ol]:mr-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA Section */}
          <div className={`mt-16 bg-gradient-to-r ${ctaContent.bgColor} rounded-2xl p-8 md:p-10 text-white shadow-xl`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{ctaContent.title}</h3>
            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              {ctaContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/962799262786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                <FaWhatsapp className="me-3 h-6 w-6 text-green-600" />
                راسلنا على واتساب
              </a>
              <a
                href="tel:+962799262786"
                className="flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition duration-300"
              >
                <FaPhone className="me-3 h-5 w-5" />
                اتصل الآن: 079 926 2786
              </a>
            </div>
          </div>

          {/* Back to articles link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/articles" className="font-semibold text-blue-700 hover:text-blue-900 flex items-center text-lg">
              <FaArrowRight className="me-2" /> العودة إلى جميع المقالات
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
