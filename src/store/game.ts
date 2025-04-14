import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { decks } from "../static/deck";
import { GameStore, GameMode, GameModeType } from "../types/game.types";
import { Deck } from "../types/deck.model";

const gameStore = (set: Function) => ({
  selected_deck: decks[0],
  duration: 60,
  rounds: 4,
  selected_round: 1,
  selected_team: 1,
  game_mode: {
    isOnline: false,
    type: "team" as GameModeType
  },
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
  setSelectedRound: (selected_round: number) => set({ selected_round }),
  setSelectedTeam: (selected_team: number) => set({ selected_team }),
  setGameMode: (game_mode: GameMode) => set({ game_mode }),
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
      selected_team: 1,
      game_mode: {
        isOnline: false,
        type: "team"
      },
    }),
});

export const useGameStore = create(devtools(gameStore));
