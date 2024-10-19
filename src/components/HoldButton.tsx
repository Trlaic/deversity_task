import React, { useRef } from 'react';
import styles from './HoldButton.module.css';

interface HoldButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const HoldButton: React.FC<HoldButtonProps> = ({ onClick, children }) => {
  const intervalRef = useRef<number | null>(null);

  const startHold = () => {
    onClick();
    intervalRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        onClick();
      }, 100);
    }, 500); 
  };

  const stopHold = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current); 
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <button
      className={styles.holdButton}
      onMouseDown={startHold}
      onMouseUp={stopHold}
      onMouseLeave={stopHold}
      onTouchStart={startHold}
      onTouchEnd={stopHold}
    >
      {children}
    </button>
  );
};

export default HoldButton;