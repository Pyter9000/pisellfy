
import React from 'react';
import { Link } from 'react-router-dom';
import { Gig, AppRoute } from '../types';

interface GigCardProps {
  gig: Gig;
}

const GigCard: React.FC<GigCardProps> = ({ gig }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <Link to={`${AppRoute.GIG_DETAIL}/${gig.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={gig.imageUrl}
            alt={gig.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <img src={gig.seller.avatar} alt={gig.seller.username} className="w-6 h-6 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-none">{gig.seller.username}</span>
            <span className="text-xs text-gray-500">{gig.seller.level}</span>
          </div>
        </div>

        <Link to={`${AppRoute.GIG_DETAIL}/${gig.id}`}>
          <h3 className="text-gray-800 font-medium text-base mb-4 line-clamp-2 group-hover:text-purple-600">
            {gig.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold mb-4">
          <i className="fa-solid fa-star"></i>
          <span>{gig.seller.rating}</span>
          <span className="text-gray-400 font-normal">({gig.seller.reviewsCount})</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <i className="fa-solid fa-heart"></i>
          </button>
          <div className="text-right">
            <span className="text-xs text-gray-400 uppercase font-bold block">Starting at</span>
            <span className="text-lg font-bold text-gray-900">π{gig.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
