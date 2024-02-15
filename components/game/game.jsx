import { GameCell } from './game-cell';
import { GameInfo } from './game-info';
import { useGameState } from './use-game-state';

import styles from './game.module.css';

export function Game() {
  const {
    cells,
    isDraw,
    winnerSymbol,
    currentSymbol,
    winnerSequence,
    handleCellClick,
    handleResetGame,
  } = useGameState();

  return (
    <div className={styles['game']}>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentSymbol={currentSymbol} />
      <div className={styles['game-field']}>
        {cells.map((symb, index) => (
          <GameCell
            symbol={symb}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={styles['game-btn']} onClick={handleResetGame}>
        Сбросить
      </button>
    </div>
  );
}
