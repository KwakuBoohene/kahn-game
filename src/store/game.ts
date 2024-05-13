import { create } from "zustand";
import { Deck } from "../types/deck.model";
import { devtools } from "zustand/middleware";
import { decks } from "../data/deck";


export interface GameStore {
  selected_deck: Deck;
  setDeck: (deck: Deck) => void;
  duration?: number;
  rounds?: number;
  team_one: {
    name: string;
    score: number;
  };
  team_two: {
    name: string;
    score: number;
  };
}

const gameStore = (set: Function) => ({
  selected_deck: decks[0],
  duration: 60,
  rounds: 4,
  team_one: {
    name: "Team 1",
    score: 0,
  },
  team_two: {
    name: "Team 2",
    score: 0,
  },
  setDeck: (deck: Deck) => set({ selected_deck: deck }),
  setDuration: (duration: number) => set({ duration }),
  setRounds: (rounds: number) => set({ rounds }),
  setTeamOneName: (name: string) =>
    set((state: GameStore) => ({ team_one: { ...state.team_one, name } })),
  setTeamTwoName: (name: string) =>
    set((state: GameStore) => ({ team_two: { ...state.team_two, name } })),
  setTeamOneScore: (score: number) =>
    set((state: GameStore) => ({ team_one: { ...state.team_one, score } })),
  setTeamTwoScore: (score: number) =>
    set((state: GameStore) => ({ team_two: { ...state.team_two, score } })),
  reset: () =>
    set({
      selected_deck: decks[0],
      duration: 60,
      rounds: 4,
      team_one: { name: "Team 1", score: 0 },
      team_two: { name: "Team 2", score: 0 },
    }),
});

export const useGameStore = create(devtools(gameStore));
