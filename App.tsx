
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GigDetail from './pages/GigDetail';
import CreateGig from './pages/CreateGig';
import { AppRoute } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={`${AppRoute.GIG_DETAIL}/:id`} element={<GigDetail />} />
            <Route path={AppRoute.CREATE_GIG} element={<CreateGig />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-cart-shopping text-white"></i>
                  </div>
                  <span className="text-xl font-bold text-gray-900 tracking-tight">Pisellfy</span>
                </div>
                <p className="text-gray-500 mb-6 max-w-sm">
                  Empowering the Pi Network community with a professional marketplace for digital services. Built by Pioneers, for Pioneers.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
                  <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Categories</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li><a href="#" className="hover:text-purple-600">Graphics & Design</a></li>
                  <li><a href="#" className="hover:text-purple-600">Digital Marketing</a></li>
                  <li><a href="#" className="hover:text-purple-600">Writing & Translation</a></li>
                  <li><a href="#" className="hover:text-purple-600">Video & Animation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li><a href="#" className="hover:text-purple-600">Help & Support</a></li>
                  <li><a href="#" className="hover:text-purple-600">Trust & Safety</a></li>
                  <li><a href="#" className="hover:text-purple-600">Selling on Pisellfy</a></li>
                  <li><a href="#" className="hover:text-purple-600">Buying on Pisellfy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                  <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-purple-600">Intellectual Property</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-gray-400 text-sm">© 2024 Pisellfy Marketplace. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-gray-400"></i>
                <span className="text-gray-500 text-sm font-medium">English</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-900 font-bold">π PI</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
