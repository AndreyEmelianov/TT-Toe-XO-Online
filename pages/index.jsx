import { useState } from "react";

import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(2);

  const { cells, currentMove, nextMove, winnerSequence, handleCellClick } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="mx-auto pt-6 w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          winnerSequence={winnerSequence}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
