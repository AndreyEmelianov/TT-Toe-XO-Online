import Link from "next/link";

import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-sm leading-tight text-teal-600 -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}
