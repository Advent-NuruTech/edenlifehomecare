'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from './CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 shadow-sm py-3'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/edenlife official logo.jpg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-green-700">EdenLife</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-green-700 transition-colors font-medium">
            Products
          </Link>
          <Link href="/testimonies" className="text-gray-700 hover:text-green-700 transition-colors font-medium">
            Testimonies
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors font-medium">
            About
          </Link>
          <Link href="/checkout" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-700" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/checkout" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-700" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/testimonies" 
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonies
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}