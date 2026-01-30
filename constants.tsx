
import { Category, Gig } from './types';

export const CATEGORIES: Category[] = [
  { id: 'graphics', name: 'Graphics & Design', icon: 'fa-palette' },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'fa-bullhorn' },
  { id: 'writing', name: 'Writing & Translation', icon: 'fa-pen-nib' },
  { id: 'video', name: 'Video & Animation', icon: 'fa-video' },
  { id: 'music', name: 'Music & Audio', icon: 'fa-music' },
  { id: 'programming', name: 'Programming & Tech', icon: 'fa-code' },
  { id: 'business', name: 'Business', icon: 'fa-briefcase' },
  { id: 'lifestyle', name: 'Lifestyle', icon: 'fa-heart' },
];

export const MOCK_GIGS: Gig[] = [
  {
    id: '1',
    title: 'I will design a professional logo for your Pi App',
    description: 'Elevate your project with a custom, high-quality logo design specifically optimized for the Pi Network ecosystem.',
    category: 'Graphics & Design',
    price: 50,
    deliveryTime: 2,
    imageUrl: 'https://picsum.photos/seed/logo1/600/400',
    tags: ['Logo', 'Design', 'Branding', 'PiNetwork'],
    seller: {
      id: 's1',
      username: 'PiDesignPro',
      avatar: 'https://i.pravatar.cc/150?u=s1',
      rating: 4.9,
      reviewsCount: 124,
      isOnline: true,
      level: 'Top Rated'
    }
  },
  {
    id: '2',
    title: 'I will develop a secure Pi Network smart contract',
    description: 'Expert blockchain developer ready to help you integrate Pi SDK and build robust smart contracts for your dApp.',
    category: 'Programming & Tech',
    price: 250,
    deliveryTime: 5,
    imageUrl: 'https://picsum.photos/seed/code1/600/400',
    tags: ['Blockchain', 'PiSDK', 'Solidity', 'Web3'],
    seller: {
      id: 's2',
      username: 'CodeWizard',
      avatar: 'https://i.pravatar.cc/150?u=s2',
      rating: 5.0,
      reviewsCount: 45,
      isOnline: false,
      level: 'Level 2'
    }
  },
  {
    id: '3',
    title: 'I will translate your app to 5 major languages',
    description: 'Localization is key for global Pi adoption. I will translate your documentation or app strings professionally.',
    category: 'Writing & Translation',
    price: 30,
    deliveryTime: 3,
    imageUrl: 'https://picsum.photos/seed/trans1/600/400',
    tags: ['Translation', 'Localization', 'Global', 'Multilingual'],
    seller: {
      id: 's3',
      username: 'PolyglotPioneer',
      avatar: 'https://i.pravatar.cc/150?u=s3',
      rating: 4.8,
      reviewsCount: 89,
      isOnline: true,
      level: 'Level 1'
    }
  },
  {
    id: '4',
    title: 'I will create a viral promo video for your service',
    description: 'High energy video production to get your Pi service noticed across social media platforms.',
    category: 'Video & Animation',
    price: 120,
    deliveryTime: 4,
    imageUrl: 'https://picsum.photos/seed/video1/600/400',
    tags: ['Video', 'Animation', 'Promo', 'Ads'],
    seller: {
      id: 's4',
      username: 'MotionMaster',
      avatar: 'https://i.pravatar.cc/150?u=s4',
      rating: 4.7,
      reviewsCount: 62,
      isOnline: true,
      level: 'Level 2'
    }
  }
];
