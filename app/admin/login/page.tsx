'use client'

import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase/config';

export default function AdminLoginPage() {
  const auth = getAuth(app);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={login} className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Admin Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="w-full p-2 border rounded" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" className="w-full p-2 border rounded" />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
