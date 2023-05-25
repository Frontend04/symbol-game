import React from "react";
import Cell from "../Cell/Cell";

interface GameBoardProps {
  items: { hasItem: boolean; clicked: boolean }[];
  onItemClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ items, onItemClick }) => {
  return (
    <div className="game-board-container">
      {items.map((item, index) => (
        <Cell
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onClick={() => onItemClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
