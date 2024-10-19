import React from 'react';
import HoldButton from './HoldButton';
import styles from './MarbleBox.module.css';

interface MarbleBoxProps {
  id: number;
  marbles: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
}

const MarbleBox: React.FC<MarbleBoxProps> = ({ 
  id,
  marbles,
  onIncrement,
  onDecrement,
  onDelete 
}) => {
  return (
    <div className={styles.marbleBox}>
      <HoldButton onClick={() => onDecrement(id)}>-</HoldButton>
      <span className={styles.marbleCount}>{marbles}</span>
      <HoldButton onClick={() => onIncrement(id)}>+</HoldButton>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        🗑️
      </button>
    </div>
  );
};

export default MarbleBox;