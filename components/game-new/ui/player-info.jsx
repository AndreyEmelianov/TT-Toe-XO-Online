import clsx from "clsx";
import Image from "next/image";

import { GameSymbol } from "./game-symbol";
import { useNow } from "../../lib/timers";

export function PlayerInfo({
  isRight,
  name,
  avatar,
  rating,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);

  const timerSeconds = Math.ceil(mils / 1000);
  const minutesString = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secondsString = String(timerSeconds % 60).padStart(2, "0");

  const isDanger = timerSeconds <= 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={"flex items-center gap-2 text-start text-teal-600 w-44"}
        >
          <Image src={avatar} alt="avatar" className="w-12 h-12" />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-500 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>

        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
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
