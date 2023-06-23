import React from 'react';

interface FadeInTextProps {
  text: string;
}

const FadeInText: React.FC<FadeInTextProps> = ({ text }) => {
  return (
    <div className="animate-fade-in-up">
      {text}
    </div>
  );
};

export default FadeInText;