import { useState } from 'react';

import { SYMBOL_O, SYMBOL_X } from './constants';

const computedWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const [currentSymbol, setCurrentSymbol] = useState(SYMBOL_O);
  const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((cell) => cell).length === 9;

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentSymbol;

    const winner = computedWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentSymbol(currentSymbol === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const handleResetGame = () => {
    setWinnerSequence(undefined);
    setCurrentSymbol(SYMBOL_O);
    setCells(Array.from({ length: 9 }, () => null));
  };

  return {
    cells,
    currentSymbol,
    winnerSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetGame,
  };
}
