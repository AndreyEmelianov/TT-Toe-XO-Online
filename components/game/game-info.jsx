import { useEffect, useState } from "react";
import clsx from "clsx";

import { Profile } from "../profile/profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarImage1 from "./images/avatar-1.png";
import avatarImage2 from "./images/avatar-2.png";
import avatarImage3 from "./images/avatar-3.png";
import avatarImage4 from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "Dron",
    rating: 900,
    symbol: GAME_SYMBOLS.CROSS,
    avatar: avatarImage1,
  },
  {
    id: 2,
    name: "Sano",
    rating: 1000,
    symbol: GAME_SYMBOLS.ZERO,
    avatar: avatarImage4,
  },
  {
    id: 3,
    name: "Marina",
    rating: 1400,
    symbol: GAME_SYMBOLS.TRIANGLE,
    avatar: avatarImage2,
  },
  {
    id: 4,
    name: "Lidia",
    rating: 1500,
    symbol: GAME_SYMBOLS.SQUARE,
    avatar: avatarImage3,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  handlePlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between ",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          onTimeOver={() => handlePlayerTimeOver(player.symbol)}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [timerSeconds, setTimerSeconds] = useState(10);

  const minutesString = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secondsString = String(timerSeconds % 60).padStart(2, "0");

  const isDanger = timerSeconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      const timer = setInterval(() => {
        setTimerSeconds((prevState) => Math.max(prevState - 1, 0));
      }, 1000);

      return () => {
        clearInterval(timer);
        setTimerSeconds(10);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (timerSeconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerSeconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("w-px h-6 bg-slate-300", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
