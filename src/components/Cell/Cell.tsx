import React from "react";

interface CellProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
  let content = null;
  if (clicked) {
    content = hasItem ? "O" : "-";
  }
  const cellClassName = `cell${clicked ? " clicked" : ""}${hasItem ? " hasItem" : ""}`;

  return (
    <div className={cellClassName} onClick={onClick}>
      {content}
    </div>
  );
};

export default Cell;


