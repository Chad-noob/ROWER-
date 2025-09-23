import React, { useEffect, useRef, useState } from "react";

const ScrollFadeIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  threshold = 0.1,
  duration = "duration-1000"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getTransformClasses = () => {
    const base = `transition-all ${duration} ease-out`;
    
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${base} opacity-0 translate-y-8`;
        case "down":
          return `${base} opacity-0 -translate-y-8`;
        case "left":
          return `${base} opacity-0 translate-x-8`;
        case "right":
          return `${base} opacity-0 -translate-x-8`;
        case "fade":
        default:
          return `${base} opacity-0`;
      }
    }
    
    return `${base} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;