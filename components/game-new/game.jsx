import { useCallback, useMemo, useReducer } from "react";

import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameOverModal } from "./ui/game-over-modal";

import { PLAYERS } from "./constants";
import {
  GAME_STATE_ACTIONS,
  initGameState,
  gameStateReducer,
} from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatchGameState] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );
  const { cells, currentMove } = gameState;

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatchGameState({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const nextMove = getNextMove(gameState);

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const handleCellClick = useCallback((index) => {
    dispatchGameState({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            symbol={cell}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}
