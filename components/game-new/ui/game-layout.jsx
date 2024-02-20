export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between">
        {playersList}
      </div>
      <div className={"mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"}>
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}

{
  /* <GameTitle playersCount={playersCount} />
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
/> */
}
