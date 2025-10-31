
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBalanceScale, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'مقالات قانونية', path: '/articles' },
    { name: 'من نحن', path: '/about' },
    { name: 'أسئلة شائعة', path: '/faq' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const linkClasses = "block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
  const activeLinkClasses = "text-white bg-blue-700 md:bg-transparent md:text-blue-700";

  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-6 py-2.5 shadow-md sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <FaBalanceScale className="h-8 w-8 me-3 text-blue-800" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">نور بركات للمحاماة</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-6 lg:gap-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
