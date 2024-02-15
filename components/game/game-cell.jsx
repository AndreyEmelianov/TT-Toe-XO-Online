import { clsx } from 'clsx';

import { GameSymbol } from './game-symbol';

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center border border-gray-400 -ml-px -mt-px',
        isWinner && 'bg-red-400',
      )}
      onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
