import Image from "next/image";

import avatarImage from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className,
      )}
    >
      <Image src={avatarImage} alt="avatar" />
      <div>
        <div className="text-lg leading-tight">Emelianov</div>
        <div className="text-slate-500 text-xs leading-tight">Рейтинг: 900</div>
      </div>
    </div>
  );
}
