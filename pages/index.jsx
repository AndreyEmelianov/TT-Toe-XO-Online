import { useState } from "react";

import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const [playersCount] = useState(4);

  const {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="mx-auto pt-6 w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          handlePlayerTimeOver={handlePlayerTimeOver}
        />
        {!!winnerSymbol && (
          <div className="my-4">
            Победитель:
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          className="mt-6"
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          winnerSymbol={winnerSymbol}
          winnerSequence={winnerSequence}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
