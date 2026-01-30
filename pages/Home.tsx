
import React from 'react';
import { CATEGORIES, MOCK_GIGS } from '../constants';
import GigCard from '../components/GigCard';

const Home: React.FC = () => {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="bg-purple-700 py-16 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The <span className="text-purple-300 italic">marketplace</span> for Pi Network Pioneers
          </h1>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Hire expert freelancers for your Pi projects or sell your skills for Pi. Fast, secure, and decentralized.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span>Popular:</span>
            <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer transition">Logo Design</span>
            <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer transition">Pi App Dev</span>
            <span className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 cursor-pointer transition">Translation</span>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {CATEGORIES.map(cat => (
            <div
              key={cat.id}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 min-w-[120px] bg-white border border-gray-100 rounded-xl hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all shadow-sm"
            >
              <i className={`fa-solid ${cat.icon} text-2xl text-purple-600`}></i>
              <span className="text-sm font-semibold text-gray-700 text-center whitespace-nowrap">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending on Pisellfy</h2>
            <p className="text-gray-500 mt-1">Quality services paid with Pi</p>
          </div>
          <button className="text-purple-600 font-bold hover:underline">See All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_GIGS.map(gig => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mt-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-check-double text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Escrow Protection</h3>
            <p className="text-gray-600">Your funds are safe. We hold the payment until you approve the work.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-headset text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is always here to help you resolve any disputes or questions.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-shield-halved text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Powered by the Pi Network blockchain for fast and secure global payments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
