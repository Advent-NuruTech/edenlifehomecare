'use client';

import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import { products } from "@/data/products";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebase/config";
import Card from '../components/Card';

export default function HomePage() {
  const [testimonies, setTestimonies] = useState<Array<{ id: string; name: string; message: string }>>([]);

  useEffect(() => {
    const fetchTestimonies = async () => {
      const q = query(collection(db, 'testimonies'), orderBy('createdAt', 'desc'), limit(3));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      setTestimonies(data);
    };
    fetchTestimonies();
  }, []);

  const shuffledProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Slider with 10-image slideshow and welcome texts */}
      <HeroSlider />

      {/* Navigation Cards */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "About Us", link: "/about" },
          { title: "Products", link: "/products" },
          { title: "Testimonies", link: "/testimonies" },
          { title: "Contact", link: "/contact" },
        ].map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="bg-white border border-blue-100 p-6 rounded-2xl shadow hover:shadow-md transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
            <p className="text-gray-500">Explore more →</p>
          </Link>
        ))}
      </section>

      {/* Featured Products */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shuffledProducts.map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/products" className="text-blue-700 hover:underline">View All Products</Link>
        </div>
      </section>

      {/* Recent Testimonies */}
      <section className="p-6 bg-white rounded-xl mx-4 mb-10 shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonies.map((t) => (
            <div key={t.id} className="bg-white p-4 border border-blue-100 rounded shadow">
              <p className="text-gray-700">“{t.message}”</p>
              <p className="text-sm font-bold mt-2 text-blue-600">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/testimonies" className="text-blue-700 hover:underline">View All Testimonies</Link>
        </div>
      </section>
    </main>
  );
}
