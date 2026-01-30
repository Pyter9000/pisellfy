
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

const Navbar: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`${AppRoute.SEARCH}?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to={AppRoute.HOME} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-cart-shopping text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900 hidden sm:block tracking-tight">
              Pi<span className="text-purple-600">sellfy</span>
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What service are you looking for?"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-purple-600">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to={AppRoute.CREATE_GIG} className="hidden sm:block text-gray-600 hover:text-purple-600 font-medium transition-colors">
              Become a Seller
            </Link>
            <button className="text-gray-600 hover:text-purple-600 font-medium px-3 py-2">
              Sign In
            </button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all shadow-sm">
              Join
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
