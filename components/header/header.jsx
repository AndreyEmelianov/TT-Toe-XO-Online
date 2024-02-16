import Image from "next/image";

import { Profile } from "../profile/profile";

import logoImage from "./logo.svg";
import { ArrowDownIcon } from "./icons/arrow-down-icon";

export function Header() {
  return (
    <header className="flex h-[100px] items-center px-8 bg-white shadow-md">
      <Image src={logoImage} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <button className="w-[180px] bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
