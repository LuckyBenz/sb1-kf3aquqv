import React, { useState, useEffect } from 'react';
import { WelcomeAnimation } from './WelcomeAnimation';
import { WelcomeButton } from './WelcomeButton';

interface WelcomePageProps {
  onEnter: () => void;
}

export function WelcomePage({ onEnter }: WelcomePageProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-emerald-50 to-sky-50 
                    dark:from-emerald-950 dark:to-sky-950 flex items-center justify-center">
      <div className="text-center">
        <WelcomeAnimation />
        {showButton && <WelcomeButton onClick={onEnter} />}
      </div>
    </div>
  );
}