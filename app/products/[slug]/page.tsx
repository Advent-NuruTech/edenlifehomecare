'use client';

import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { useCart } from "@/components/CartContext"

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  const { addToCart } = useCart();

  if (!product) return notFound();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="grid grid-cols-3 gap-2">
          {product.images.map((img, i) => (
            <img key={i} src={img} className="rounded shadow h-32 w-full object-cover" />
          ))}
        </div>
        <div>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p><strong>Usage:</strong> {product.usage}</p>
          <p><strong>Benefits:</strong> {product.benefits}</p>
          <p className="text-xl mt-2 text-green-600 font-bold">Ksh {product.price}</p>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
