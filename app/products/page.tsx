'use client'

import { useState } from 'react';
import Link from 'next/link';
import { products as allProducts, Product } from '@/data/products';

const categories = ['all', 'herbs', 'oils', 'books'] as const;

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setCategory] = useState<typeof categories[number]>('all');

  const filtered = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛍️ Our Products</h2>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-64"
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded border ${selectedCategory === cat ? 'bg-green-600 text-white' : 'bg-white'}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div className="bg-white p-4 rounded shadow hover:scale-105 transition">
              <img src={p.images[0]} alt={p.name} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="text-green-600 font-bold">Ksh {p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
