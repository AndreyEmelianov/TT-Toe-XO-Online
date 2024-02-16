import Image from "next/image";

import { Profile } from "../profile/profile";
import { UiButton } from "../uikit/ui-button";

import logoImage from "./logo.svg";
import { ArrowDownIcon } from "./icons/arrow-down-icon";

export function Header() {
  return (
    <header className="flex h-[100px] items-center px-8 bg-white shadow-md">
      <Image src={logoImage} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name={"Emelianov"} rating={"1300"} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
