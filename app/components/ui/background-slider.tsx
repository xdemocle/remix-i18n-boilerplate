import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BackgroundSliderProps {
  images: string[];
  interval?: number; // in milliseconds
  className?: string;
}

/**
 * BackgroundSlider Component
 *
 * A minimal, elegant background image slider that crossfades between images.
 *
 * @param images Array of image paths to cycle through
 * @param interval Time in ms between image transitions (default: 5000ms)
 * @param className Additional classes to apply to the container
 */
export function BackgroundSlider({
  images,
  interval = 5000,
  className = '',
}: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only set up the interval if we have multiple images
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>
      {/* Overlay to blend with gradient and ensure text readability */}
      <div className="absolute inset-0 bg-primary-900/70 mix-blend-multiply" />
    </div>
  );
}
