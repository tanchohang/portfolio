import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);
    const current = containerRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
        console.log('unsubscribed');
      }
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};

export default useIntersectionObserver;
