'use client';

import { useEffect } from 'react';

const selector = ['.hero-visual','.about-video','.up-gallery figure','.up-model-card','.robot-video','.gege-family figure','.gege-details figure','.cap-grid article','.project-card','.ai-card','.about-advantages article','.building-hub','.about-vision'].join(',');

export default function ViewportMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!items.length) return;
    const canAnimate = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canAnimate) return;
    items.forEach((item) => item.classList.add('motion-ready'));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-visible');
      observer.unobserve(entry.target);
    }), { threshold: 0.14, rootMargin: '0px 0px -5% 0px' });
    items.forEach((item) => observer.observe(item));
    const timers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    const pulseVisible = () => items.filter((item) => item.classList.contains('motion-visible')).forEach((item) => {
      const previous = timers.get(item);
      if (previous) clearTimeout(previous);
      item.classList.remove('motion-tap');
      void item.offsetWidth;
      item.classList.add('motion-tap');
      timers.set(item, setTimeout(() => item.classList.remove('motion-tap'), 720));
    });
    document.addEventListener('pointerdown', pulseVisible, { passive: true });
    return () => {
      observer.disconnect();
      document.removeEventListener('pointerdown', pulseVisible);
      timers.forEach(clearTimeout);
      items.forEach((item) => item.classList.remove('motion-ready', 'motion-visible', 'motion-tap'));
    };
  }, []);
  return null;
}
