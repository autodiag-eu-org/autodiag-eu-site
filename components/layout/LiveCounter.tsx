'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';

interface LiveCounterProps {
  target: number;
}

export default function LiveCounter({ target }: LiveCounterProps) {
  const t = useTranslations('counter');
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const formatNumber = useCallback((num: number): string => {
    return new Intl.NumberFormat('fr-FR').format(Math.floor(num));
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          }

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, hasAnimated]);

  const formattedCount = formatNumber(count);
  const label = t('label', { count: formattedCount });

  return (
    <div ref={containerRef} className="text-center" aria-live="polite">
      <p className="text-lg font-medium text-secondary sm:text-xl">
        {label}
      </p>
    </div>
  );
}
