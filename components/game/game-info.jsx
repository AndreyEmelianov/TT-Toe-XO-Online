import { GameSymbol } from './game-symbol';

import styles from './game.module.css';

export function GameInfo({ isDraw, winnerSymbol, currentSymbol }) {
  if (isDraw) {
    return <div className={styles['game-info']}>Ничья</div>;
  }

  if (winnerSymbol) {
    <div className={styles['game-info']}>
      Победитель: <GameSymbol symbol={winnerSymbol} />
    </div>;
  }

  return (
    <div className={styles['game-info']}>
      Ход: <GameSymbol symbol={currentSymbol} />
    </div>
  );
}
