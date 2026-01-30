
export interface User {
  id: string;
  username: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  isOnline: boolean;
  level: 'New Seller' | 'Level 1' | 'Level 2' | 'Top Rated';
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  deliveryTime: number;
  imageUrl: string;
  seller: User;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export enum AppRoute {
  HOME = '/',
  GIG_DETAIL = '/gig',
  CREATE_GIG = '/create',
  PROFILE = '/profile',
  SEARCH = '/search'
}
