import React, { useState } from "react";
import AttemptsCounter from "./components/AttemptsCounter/AttemptsCounter";
import GameBoard from "./components/GameBoard/GameBoard";
import Button from "./components/Button/Button";
import './Game.css';

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = (): Item[] => {
  const items: Item[] = [];
  for (let i = 0; i < 36; i++) {
    items.push({ hasItem: false, clicked: false });
  }
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
};

const Game: React.FC = () => {
  const [items, setItems] = useState<Item[]>(createItems());
  const [clickCount, setClickCount] = useState<number>(0);
  const [found, setFound] = useState<boolean>(false);

  const handleClick = (index: number): void => {
    if (!items[index].clicked && !found) {
      const newItems = [...items];
      newItems[index].clicked = true;
      setItems(newItems);
      setClickCount(clickCount + 1);

      if (newItems[index].hasItem) {
        setFound(true);
      }
    }
  };

  const resetGame = (): void => {
    setItems(createItems());
    setClickCount(0);
    setFound(false);
  };

  return (
    <div>
      <Button onClick={resetGame}>Reset</Button>
      <AttemptsCounter count={clickCount} />
      <GameBoard items={items} onItemClick={handleClick} />
      {found && <div>Element found!</div>}
    </div>
  );
};

export default Game;

