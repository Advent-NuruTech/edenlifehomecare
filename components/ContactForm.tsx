'use client'

import { useState } from 'react';
import { db } from '@/firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error sending message. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <input name="name" onChange={handleChange} value={formData.name} placeholder="Your Name" required className="w-full p-2 border rounded" />
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Your Email" required className="w-full p-2 border rounded" />
      <input name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone Number" required className="w-full p-2 border rounded" />
      <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Your Message" required className="w-full p-2 border rounded h-32" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Send</button>
      {status && <p className="text-sm text-center">{status}</p>}
    </form>
  );
}
