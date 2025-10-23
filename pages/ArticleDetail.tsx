
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaUserEdit, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

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

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <article>
          <header className="mb-8 border-b pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{article.title}</h1>
            <div className="flex items-center text-md text-gray-500 mt-4 space-x-6 rtl:space-x-reverse">
              <div className="flex items-center">
                <FaUserEdit className="me-2" />
                <span>بقلم: {article.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="me-2" />
                <span>تاريخ النشر: {article.date}</span>
              </div>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-loose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t">
              <Link to="/articles" className="font-semibold text-blue-700 hover:text-blue-900 flex items-center">
                <FaArrowRight className="me-2" /> العودة إلى جميع المقالات
              </Link>
          </div>

        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
