export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'herbs' | 'oils' | 'books';
  images: string[];
  description: string;
  usage: string;
  benefits: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Neem Herbal Soap',
    slug: 'neem-herbal-soap',
    price: 300,
    category: 'herbs',
    images: ['/assets/healthy-eating.jpg', '/img/herbal2.jpg', '/img/herbal3.jpg'],
    description: 'Pure neem soap for skin healing.',
    usage: 'Use on face & body twice daily.',
    benefits: 'Fights acne, eczema & clears skin.'
  },
  {
    id: '2',
    name: 'Coconut Oil',
    slug: 'coconut-oil',
    price: 500,
    category: 'oils',
    images: ['/assets/health is wealth.jpg', '/img/oil2.jpg', '/img/oil3.jpg'],
    description: 'Cold-pressed coconut oil for skin and hair.',
    usage: 'Apply on scalp and skin daily.',
    benefits: 'Moisturizes, heals dry scalp, strengthens hair.'
  },
  {
    id: '3',
    name: 'Healing Through Nature (Book)',
    slug: 'healing-nature-book',
    price: 750,
    category: 'books',
    images: ['/assets/health is wealth.jpg', '/img/book2.jpg', '/img/book3.jpg'],
    description: 'Educational book on natural remedies.',
    usage: 'Read daily for natural healing tips.',
    benefits: 'Boosts knowledge on herbal medicine.'
  }
];
