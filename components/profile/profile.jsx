import Image from "next/image";

import avatarImage from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarImage }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className,
      )}
    >
      <Image src={avatar} alt="avatar" className="w-12 h-12" />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-500 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
