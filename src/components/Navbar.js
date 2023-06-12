import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isMenuOpen ? 'transform rotate-45 translate-y-1' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
            }`}
          ></div>
        </button>
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="Аватар пользователя"
          />
          <div>
            <p className="text-white font-medium">Ваше имя</p>
            <p className="text-white text-sm">Ваш email</p>
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto p-6 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              to="/"
              className="text-lg font-bold text-white hover:underline"
              onClick={toggleMenu}
            >
              Список постов
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-bold text-white hover:underline"
              onClick={toggleMenu}
            >
              Обо мне
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
