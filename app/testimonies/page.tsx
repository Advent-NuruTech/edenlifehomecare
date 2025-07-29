'use client'

import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/config';
import TestimonyCard from '@/components/TestimonyCard';

interface Testimony {
  id: string;
  name: string;
  message: string;
  createdAt: any;
}

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'testimonies'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: Testimony[] = [];
      snapshot.forEach((doc) => {
        results.push({ ...(doc.data() as Testimony), id: doc.id });
      });
      setTestimonies(results);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">What People Are Saying</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.id} {...testimony} />
        ))}
      </div>
    </div>
  );
}
