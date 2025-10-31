
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaArrowLeft, FaCalendarAlt, FaSearch, FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const ArticleList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on search query only
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) {
      return articles;
    }

    const query = searchQuery.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="bg-gray-50">
      <SEO
        title="مقالات قانونية | نصائح وشروحات قانونية من محامية متخصصة"
        description="مقالات قانونية متخصصة من محامية في عمان - شرح قانون التأمين الأردني، تحصيل الديون، قانون العمل، العقود، قضايا الإيجار. نصائح قانونية عملية ورؤى قانونية احترافية تناسب الأفراد والشركات في الأردن"
        keywords="مقالات قانونية، قانون أردني، قانون التأمين، قانون العمل الأردني، تحصيل ديون، العقود القانونية، قضايا إيجار، نصائح قانونية، شرح قانون، محامي مقالات، قانون مدني أردني"
        canonicalUrl="https://nourbarakat.com/articles"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المقالات القانونية</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              مقالات ونصائح قانونية متخصصة في القانون الأردني
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="text-blue-600" />
                <span>{article.date}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight">
                {article.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                {article.summary}
              </p>

              <div className="flex items-center text-blue-600 font-medium">
                <span className="text-sm">اقرأ المزيد</span>
                <FaArrowLeft className="mr-2 text-xs" />
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 max-w-md mx-auto">
            <p className="text-gray-600 mb-4">لم نجد مقالات تطابق بحثك</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              عرض جميع المقالات
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            استشارة قانونية
          </h2>
          <p className="text-blue-100 mb-8">
            للحصول على استشارة قانونية متخصصة، تواصل معنا
          </p>
          <a
            href="https://wa.me/962799262786?text=مرحباً، أود الاستفسار عن الخدمات القانونية"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-blue-900 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            <FaWhatsapp className="me-2 text-xl" />
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
