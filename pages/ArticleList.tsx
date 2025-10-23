
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { FaArrowLeft, FaUserEdit, FaCalendarAlt } from 'react-icons/fa';

const ArticleList: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">مقالات قانونية</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            مجموعة من المقالات التي تسلط الضوء على جوانب قانونية هامة وتوفر رؤى قيمة في مختلف القضايا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4 rtl:space-x-reverse">
                    <div className="flex items-center">
                        <FaUserEdit className="me-2 text-blue-600" />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="me-2 text-blue-600" />
                        <span>{article.date}</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-800">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed">{article.summary}</p>
              </div>
              <div className="bg-gray-50 p-4">
                <Link to={`/articles/${article.id}`} className="font-semibold text-blue-700 hover:text-blue-900 flex items-center">
                  اقرأ المقال كاملاً <FaArrowLeft className="ms-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
