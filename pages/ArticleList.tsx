
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaArrowLeft, FaUserEdit, FaCalendarAlt, FaSearch, FaTimes, FaBook, FaCarCrash, FaMoneyBillWave, FaFileSignature, FaUsers, FaHouseUser, FaClock, FaSortAmountDown, FaHome, FaChevronLeft, FaArrowUp } from 'react-icons/fa';
import SEO from '../components/SEO';

const ArticleList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'alphabetical'>('newest');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate estimated read time based on content length
  const calculateReadTime = (content: string): number => {
    const wordsPerMinute = 200; // Average reading speed in Arabic
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define article categories based on content
  const categories = [
    { id: 'all', label: 'جميع المقالات', icon: FaBook, count: articles.length },
    { id: 'insurance', label: 'التأمين والحوادث', icon: FaCarCrash, articles: ['1', '4'] },
    { id: 'debt', label: 'تحصيل الديون', icon: FaMoneyBillWave, articles: ['2', '5', '9'] },
    { id: 'contracts', label: 'العقود والاتفاقيات', icon: FaFileSignature, articles: ['6'] },
    { id: 'labor', label: 'قانون العمل', icon: FaUsers, articles: ['3', '7', '10'] },
    { id: 'rental', label: 'الإيجار والإخلاء', icon: FaHouseUser, articles: ['8'] },
  ];

  // Filter and sort articles based on search, category, and sort order
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.id === selectedCategory);
      if (category && category.articles) {
        filtered = filtered.filter(article => category.articles.includes(article.id));
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query)
      );
    }

    // Sort articles
    if (sortOrder === 'newest') {
      // Articles are already in newest-first order (higher ID = newer)
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    } else if (sortOrder === 'oldest') {
      filtered.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    } else if (sortOrder === 'alphabetical') {
      filtered.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortOrder]);

  // Get featured article (most recent or first)
  const featuredArticle = articles[3]; // Article #4 - comprehensive traffic accident guide

  return (
    <div className="bg-gray-50">
      <SEO
        title="مقالات قانونية"
        description="مقالات قانونية شاملة من مكتب نور بركات: التأمين، تحصيل الديون، قانون العمل، العقود، والإيجار. رؤى قانونية متخصصة في القانون الأردني."
        keywords="مقالات قانونية، قانون أردني، استشارات قانونية، نصائح قانونية، تأمين المركبات، تحصيل ديون، قانون عمل"
        canonicalUrl="https://ksalah1.github.io/NourBarakat.com/#/articles"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <FaHome className="text-base" />
              <span>الرئيسية</span>
            </Link>
            <FaChevronLeft className="text-xs text-gray-400" />
            <span className="text-blue-600 font-semibold">المقالات</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">مقالات قانونية</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              دليلك الشامل للمعلومات القانونية في الأردن. مقالات متخصصة تساعدك على فهم حقوقك وواجباتك القانونية
            </p>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 max-w-md mx-auto">
              <span className="text-3xl font-bold">{articles.length}</span>
              <span className="text-blue-100">مقال قانوني متخصص</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search Bar and Sort */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center max-w-5xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-lg rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md transition-all"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative md:w-64">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'alphabetical')}
                className="w-full px-6 py-4 pr-12 text-lg rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md bg-white appearance-none cursor-pointer transition-all"
              >
                <option value="newest">الأحدث أولاً</option>
                <option value="oldest">الأقدم أولاً</option>
                <option value="alphabetical">أبجدياً (أ-ي)</option>
              </select>
              <FaSortAmountDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const articleCount = category.id === 'all' ? articles.length : category.articles?.length || 0;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <category.icon className="text-lg" />
                  <span>{category.label}</span>
                  <span className={`text-sm px-2 py-0.5 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {articleCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    مقال مميز
                  </span>
                  <span className="text-blue-100 text-sm">الأكثر شمولاً</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center gap-6 text-blue-100 mb-6">
                  <div className="flex items-center gap-2">
                    <FaUserEdit />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
                <Link
                  to={`/articles/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition duration-300 shadow-lg"
                >
                  اقرأ المقال المميز
                  <FaArrowLeft />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Results Summary */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 text-lg">
              {filteredArticles.length === 0 ? (
                <span className="text-red-600 font-semibold">لا توجد مقالات مطابقة لبحثك</span>
              ) : (
                <>
                  عرض <span className="font-bold text-blue-600">{filteredArticles.length}</span> من {articles.length} مقال
                </>
              )}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const readTime = calculateReadTime(article.content);
            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeIn"
              >
                {/* Article Number Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    {article.id}
                  </div>
                  {/* Read Time Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-lg">
                    <FaClock className="text-xs" />
                    <span>{readTime} دقائق</span>
                  </div>
                </div>

                <div className="p-6 pt-16 flex-grow">
                  <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center gap-1">
                      <FaUserEdit className="text-blue-600" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-600" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 hover:text-blue-700 transition-colors leading-tight">
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                  </h2>

                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-t border-blue-200">
                  <Link
                    to={`/articles/${article.id}`}
                    className="font-semibold text-blue-700 hover:text-blue-900 flex items-center justify-between group"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">لم نجد نتائج</h3>
              <p className="text-gray-600 mb-6">
                جرب البحث بكلمات مختلفة أو اختر فئة أخرى
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                عرض جميع المقالات
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">لديك سؤال قانوني؟</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            لم تجد المعلومات التي تبحث عنها؟ تواصل معنا للحصول على استشارة قانونية متخصصة
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
              راسلنا على واتساب
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-fadeIn"
          aria-label="العودة للأعلى"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ArticleList;
