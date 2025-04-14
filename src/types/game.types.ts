import { Deck } from "./deck.model";

export type GameModeType = "team" | "one_v_one";

export interface GameMode {
  isOnline: boolean;
  type: GameModeType;
}

export interface GameModeOption {
  title: string;
  subtitle: string;
  route: string;
  mode: GameMode;
}

export interface Team {
  name: string;
  score: number;
}

export interface GameStore {
  selected_deck: Deck;
  setDeck: (deck: Deck) => void;
  duration?: number;
  rounds?: number;
  team_one: Team;
  team_two: Team;
  game_mode: GameMode;
  setGameMode: (mode: GameMode) => void;
} 