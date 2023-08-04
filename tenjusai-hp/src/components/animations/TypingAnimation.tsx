'use client';
import React, { useEffect, useState } from 'react';

type TypingAnimationProps = {
  lines: string[];
  speed?: number;
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({ lines, speed = 100 }) => {
  const [currentTexts, setCurrentTexts] = useState<string[]>(Array(lines.length).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < lines.length) {
        setCurrentTexts((prevTexts) => {
          const newTexts = [...prevTexts];
          newTexts[currentIndex] = newTexts[currentIndex] + lines[currentIndex].charAt(newTexts[currentIndex].length);
          if (newTexts[currentIndex].length === lines[currentIndex].length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
          return newTexts;
        });
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed, currentIndex]);

  return (
    <div>
      {currentTexts.map((text, index) => (
        <div key={index} className="overflow-hidden border-current block">
          <span className="inline-block">{text}</span>
          {index === currentIndex && <span className="inline-block blinking-cursor">|</span>}
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation;
