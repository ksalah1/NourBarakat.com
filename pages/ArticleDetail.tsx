
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { services } from '../data/services';
import { FaUserEdit, FaCalendarAlt, FaArrowRight, FaWhatsapp, FaPhone, FaList, FaBook, FaClock, FaBriefcase } from 'react-icons/fa';
import SEO from '../components/SEO';
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData';

// Mapping of article IDs to related article slugs and service IDs
const relatedContentMap: Record<string, { articles: string[]; services: string[] }> = {
  '1': { articles: ['car-accident-legal-steps-jordan'], services: ['vehicle-insurance'] },
  '2': { articles: ['when-debt-becomes-collectible', 'debt-payment-delay-consequences'], services: ['financial-claims'] },
  '3': { articles: ['wrongful-termination-employee-rights', 'unpaid-wages-legal-steps-jordan'], services: ['contract-review', 'labor-disputes'] },
  '4': { articles: ['vehicle-insurance-policy-importance'], services: ['vehicle-insurance'] },
  '5': { articles: ['legal-notice-debt-collection-jordan', 'debt-payment-delay-consequences'], services: ['financial-claims'] },
  '6': { articles: ['employment-contract-essential-terms'], services: ['contract-review'] },
  '7': { articles: ['employment-contract-essential-terms', 'unpaid-wages-legal-steps-jordan'], services: ['labor-disputes'] },
  '8': { articles: [], services: ['landlord-tenant'] },
  '9': { articles: ['legal-notice-debt-collection-jordan', 'when-debt-becomes-collectible'], services: ['financial-claims'] },
  '10': { articles: ['wrongful-termination-employee-rights', 'employment-contract-essential-terms'], services: ['labor-disputes'] }
};

interface Heading {
  id: string;
  text: string;
  level: number;
}

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((art) => art.slug === slug);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    if (article) {
      // Extract headings from article content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = article.content;
      const h2Elements = tempDiv.querySelectorAll('h2, h3');

      const extractedHeadings: Heading[] = Array.from(h2Elements).map((heading, index) => {
        const text = heading.textContent || '';
        const id = `heading-${index}`;
        const level = parseInt(heading.tagName.substring(1));
        return { id, text, level };
      });

      setHeadings(extractedHeadings);
    }
  }, [article]);

  // Add IDs to headings in content for anchor links
  useEffect(() => {
    if (article && headings.length > 0) {
      const contentDiv = document.querySelector('.article-content');
      if (contentDiv) {
        const h2h3Elements = contentDiv.querySelectorAll('h2, h3');
        h2h3Elements.forEach((heading, index) => {
          heading.setAttribute('id', `heading-${index}`);
        });
      }
    }
  }, [article, headings]);

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveHeading(headings[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

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

  // Get related content
  const relatedContent = relatedContentMap[article.id] || { articles: [], services: [] };
  const relatedArticles = articles.filter(a => relatedContent.articles.includes(a.slug));
  const relatedServices = services.filter(s => relatedContent.services.includes(s.id));

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
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          {headings.length > 0 && (
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-blue-200">
                    <FaList className="text-blue-600 text-lg" />
                    <h3 className="text-lg font-bold text-gray-900">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }}
                        className={`block text-sm leading-relaxed transition-all duration-200 ${
                          heading.level === 2
                            ? 'font-semibold text-gray-800 hover:text-blue-600 py-2'
                            : 'text-gray-600 hover:text-blue-600 pr-4 py-1.5'
                        } ${activeHeading === heading.id ? 'text-blue-600 bg-blue-50 pr-3 border-r-4 border-blue-600' : ''}`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          )}

          {/* Main Article Content */}
          <article className={`${headings.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'} order-1 lg:order-2`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Article Summary */}
              <div className="mb-8 pb-8 border-b-2 border-blue-100">
                <div className="flex items-start gap-3 mb-4">
                  <FaBook className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    {article.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <FaClock className="text-blue-600" />
                  <span>وقت القراءة: {Math.ceil(article.content.length / 1000)} دقائق</span>
                </div>
              </div>

              {/* Article Content with Enhanced Styling */}
              <div
                className="article-content prose prose-lg max-w-none text-gray-800 leading-relaxed
                           prose-headings:text-gray-900 prose-headings:font-bold prose-headings:scroll-mt-24
                           prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-blue-300 prose-h2:text-blue-900 prose-h2:bg-gradient-to-r prose-h2:from-blue-50 prose-h2:to-transparent prose-h2:p-4 prose-h2:rounded-lg prose-h2:-mr-4 prose-h2:-ml-4
                           prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-800 prose-h3:border-r-4 prose-h3:border-blue-500 prose-h3:pr-4 prose-h3:bg-blue-50/50 prose-h3:py-2 prose-h3:rounded-r-lg
                           prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-blue-700 prose-h4:font-semibold
                           prose-p:mb-5 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[1.1rem]
                           prose-ul:my-6 prose-ul:text-gray-700 prose-ul:space-y-2
                           prose-ol:my-6 prose-ol:text-gray-700 prose-ol:space-y-3
                           prose-li:mb-3 prose-li:leading-relaxed prose-li:text-[1.05rem]
                           prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-yellow-50 prose-strong:px-1
                           prose-a:text-blue-700 prose-a:font-semibold prose-a:underline prose-a:decoration-2 prose-a:decoration-blue-300 prose-a:underline-offset-2 hover:prose-a:text-blue-900 hover:prose-a:decoration-blue-500 hover:prose-a:bg-blue-50 prose-a:px-1 prose-a:py-0.5 prose-a:rounded prose-a:transition-all
                           [&_ul]:list-disc [&_ul]:mr-6 [&_ol]:mr-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Related Articles Section */}
              {relatedArticles.length > 0 && (
                <div className="mt-16 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FaBook className="text-blue-600" />
                    مقالات ذات صلة
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedArticles.map((relArticle) => (
                      <Link
                        key={relArticle.id}
                        to={`/articles/${relArticle.slug}`}
                        className="group bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200 p-6 hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                          <FaCalendarAlt />
                          <span>{relArticle.date}</span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                          {relArticle.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {relArticle.summary}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                          <span>اقرأ المقال الكامل</span>
                          <FaArrowRight className="mr-2 text-xs group-hover:mr-3 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services Section */}
              {relatedServices.length > 0 && (
                <div className="mt-12 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FaBriefcase className="text-green-600" />
                    خدمات قانونية ذات صلة
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="group bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-200 p-6 hover:shadow-xl hover:border-green-400 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                            <service.icon className="text-2xl text-green-600" />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-900 flex-1 leading-tight group-hover:text-green-700 transition-colors">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {service.summary}
                        </p>
                        <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700">
                          <span>تعرف على الخدمة</span>
                          <FaArrowRight className="mr-2 text-xs group-hover:mr-3 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

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
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
