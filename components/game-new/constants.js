import avatarImage1 from "./ui/images/avatar-1.png";
import avatarImage2 from "./ui/images/avatar-2.png";
import avatarImage3 from "./ui/images/avatar-3.png";
import avatarImage4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
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
