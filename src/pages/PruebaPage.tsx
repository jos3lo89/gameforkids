import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = {
  LETTER: 'letter'
};

const DraggableLetter = ({ letter, index, moveLetter }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.LETTER,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '10px',
        margin: '5px',
        backgroundColor: 'lightblue',
        display: 'inline-block',
      }}
    >
      {letter}
    </div>
  );
};

const AlphabetGame = () => {
  const [letters, setLetters] = useState(['B', 'A', 'C']);

  const moveLetter = (dragIndex, hoverIndex) => {
    const newLetters = [...letters];
    const [removed] = newLetters.splice(dragIndex, 1);
    newLetters.splice(hoverIndex, 0, removed);
    setLetters(newLetters);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Ordena el alfabeto</h2>
        {letters.map((letter, index) => (
          <DraggableLetter
            key={index}
            index={index}
            letter={letter}
            moveLetter={moveLetter}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default AlphabetGame;
