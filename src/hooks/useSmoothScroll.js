// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [enabled]);
};

export default useSmoothScroll;