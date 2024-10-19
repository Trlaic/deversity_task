import React, { useState } from 'react';
import MarbleBox from './components/MarbleBox';
import './App.css';

interface Box {
  id: number;
  marbles: number;
}

const App: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [nextId, setNextId] = useState(1);

  const totalMarbles = boxes.reduce((sum, box) => sum + box.marbles, 0);

  const addBox = () => {
    setBoxes([...boxes, { id: nextId, marbles: 0 }]);
    setNextId(nextId + 1);
  };

  const incrementMarbles = (id: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, marbles: box.marbles + 1 } : box
      )
    );
  };

  const decrementMarbles = (id: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id && box.marbles > 0
          ? { ...box, marbles: box.marbles - 1 }
          : box
      )
    );
  };

  const deleteBox = (id: number) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h2>Boxes count: {boxes.length}</h2>
        <h2>Marbles count: {totalMarbles}</h2>
      </header>
      <button onClick={addBox}>ADD NEW BOX</button>
      {boxes.length === 0 && <p>No marble boxes, yet.</p>}
      {boxes.map((box) => (
        <MarbleBox
          key={box.id}
          id={box.id}
          marbles={box.marbles}
          onIncrement={incrementMarbles}
          onDecrement={decrementMarbles}
          onDelete={deleteBox}
        />
      ))}
    </div>
  );
};

export default App;