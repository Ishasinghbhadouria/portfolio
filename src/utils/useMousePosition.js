import { useState, useEffect } from 'react';

export const useMousePosition = (ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0, percentageX: 0, percentageY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate percentages relative to the center of the element (-50% to 50%)
      const percentageX = ((x / rect.width) - 0.5) * 100;
      const percentageY = ((y / rect.height) - 0.5) * 100;

      setPosition({ x, y, percentageX, percentageY });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref]);

  return position;
};
