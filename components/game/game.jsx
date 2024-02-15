import { GameCell } from './game-cell';
import { GameInfo } from './game-info';
import { ResetButton } from './reset-button';
import { useGameState } from './use-game-state';

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
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentSymbol={currentSymbol} />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symb, index) => (
          <GameCell
            symbol={symb}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={handleResetGame} />
    </div>
  );
}
