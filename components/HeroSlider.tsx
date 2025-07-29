'use client';

import React, { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

// Image paths relative to /public/img/
const heroImages = [
  { src: '/img/edenlife official logo.jpg', text: 'Welcome to EdenLife Homecare' },
  { src: '/img/health is wealth.jpg', text: 'Natural Healing. Trusted Care.' },
  { src: '/img/prodcts.jpg', text: 'Herbal Products for Wellness' },
  { src: '/img/Homebased.jpg', text: 'Home-Based Health Services' },
  { src: '/img/oils.jpg', text: 'Pure Oils and Soaps' },
  { src: '/img/biblicalhealth.jpg', text: 'Biblical Health Principles' },
  { src: '/img/slide three.jpg', text: 'Safe, Organic & Effective' },
  { src: '/img/affordable.jpg', text: 'Affordable Family Care' },
  { src: '/img/8laws.jpg', text: 'Restoring Health Naturally' },
  { src: '/img/organic.jpg', text: 'Healing Naturally: Living Fully' },
];

export default function HeroSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: true,
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3500); // Autoplay every 3.5 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {heroImages.map((item, index) => (
          <div key={index} className="keen-slider__slide relative">
            <Image
              src={item.src}
              alt={item.text}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-6 drop-shadow-lg animate-fade-in">
                {item.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
