
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_GIGS } from '../constants';

const GigDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('basic');
  const gig = MOCK_GIGS.find(g => g.id === id);

  if (!gig) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-800">Gig not found</h2>
        <Link to="/" className="text-purple-600 font-bold mt-4">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {gig.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <img src={gig.seller.avatar} className="w-12 h-12 rounded-full ring-2 ring-purple-100" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">{gig.seller.username}</span>
                <span className="text-gray-400">|</span>
                <span className="text-purple-600 font-semibold">{gig.seller.level}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <i className="fa-solid fa-star"></i>
                <span className="font-bold">{gig.seller.rating}</span>
                <span className="text-gray-400 font-normal">({gig.seller.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img src={gig.imageUrl} alt={gig.title} className="w-full h-auto object-cover aspect-video" />
          </div>

          <div className="prose prose-purple max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Gig</h2>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {gig.description}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About The Seller</h2>
            <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-2xl">
              <img src={gig.seller.avatar} className="w-24 h-24 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{gig.seller.username}</h3>
                  <button className="border border-purple-600 text-purple-600 px-4 py-1 rounded-lg font-bold hover:bg-purple-50">Contact Me</button>
                </div>
                <p className="text-gray-600 mb-4 italic">"Expert freelancer delivering high quality Pi ecosystem services since 2021."</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-400 uppercase font-bold text-[10px]">From</span>
                    <span className="font-bold">United Kingdom</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 uppercase font-bold text-[10px]">Avg. response time</span>
                    <span className="font-bold">1 hour</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 uppercase font-bold text-[10px]">Last delivery</span>
                    <span className="font-bold">2 days ago</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 uppercase font-bold text-[10px]">Member since</span>
                    <span className="font-bold">May 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Purchase Card */}
        <div className="w-full lg:w-[400px]">
          <div className="sticky top-24">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Pricing Tabs */}
              <div className="flex border-b border-gray-100">
                {['Basic', 'Standard', 'Premium'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${activeTab === tab.toLowerCase() ? 'text-purple-600 border-b-4 border-purple-600 bg-purple-50' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-700">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Package</span>
                  <span className="text-3xl font-black text-gray-900">π{gig.price * (activeTab === 'basic' ? 1 : activeTab === 'standard' ? 1.8 : 3)}</span>
                </div>

                <p className="text-gray-600 mb-6 font-medium">
                  {activeTab === 'basic' ? 'Basic professional service including essential features.' :
                   activeTab === 'standard' ? 'Full service including premium assets and faster delivery.' :
                   'The ultimate package with VIP support and source files included.'}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <i className="fa-solid fa-clock"></i>
                    <span>{gig.deliveryTime} Days Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <i className="fa-solid fa-rotate-left"></i>
                    <span>2 Revisions</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-black text-xl hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all mb-4">
                  Continue (π{gig.price * (activeTab === 'basic' ? 1 : activeTab === 'standard' ? 1.8 : 3)})
                </button>

                <button className="w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Contact Seller
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase">
                <i className="fa-solid fa-shield-halved"></i>
                Pi Secure Payment
              </div>
              <p className="text-gray-400 text-[10px] text-center px-4">
                Payments are securely processed via Pi SDK. Freelancer is paid only after you approve the order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetail;
