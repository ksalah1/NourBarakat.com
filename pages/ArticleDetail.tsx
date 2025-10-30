
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaUserEdit, FaCalendarAlt, FaArrowRight, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((art) => art.id === id);

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

  const ctaContent = getCTAContent();

  return (
    <div className="bg-gray-50">
      {/* Article Header with gradient */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
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
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed
                       prose-headings:text-gray-900 prose-headings:font-bold
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-blue-200
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-800
                       prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-blue-700
                       prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed
                       prose-ul:my-6 prose-ul:text-gray-700
                       prose-ol:my-6 prose-ol:text-gray-700
                       prose-li:mb-2 prose-li:leading-relaxed
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
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
