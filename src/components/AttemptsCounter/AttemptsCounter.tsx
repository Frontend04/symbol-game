import React from "react";

interface AttemptsCounterProps {
  count: number;
}

const AttemptsCounter: React.FC<AttemptsCounterProps> = ({ count }) => {
  return <div>Attempts: {count}</div>;
};

export default AttemptsCounter;
