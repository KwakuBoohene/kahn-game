import { decks } from "../data/deck";
import { useNavigate } from "react-router-dom";
import { GameStore, useGameStore } from "../store/game";

export default function Play() {
  const navigate = useNavigate();
  const setDeck = useGameStore((state: GameStore) => state.setDeck);
  return (
    <div className="">
      <div className="">Please select a deck to play with </div>
      <div className="flex py-10">
        {decks.map((deck, index: number) => (
          <div
            key={index}
            onClick={() => {
              setDeck(deck);
              navigate("/start-game");
            }}
            className="px-4 py-2 cursor-pointer hover:bg-green-500 transition-colors
           duration-300 border bg-green-400 rounded-lg border-green-400 mx-4"
          >
            <div className="">{deck.name}</div>
          </div>
        ))}
      </div>
      <div className="">OR</div>
      <div className="py-2">
        <button
          onClick={() => {
            navigate("/start-game");
          }}
          className=""
        >
          Get Started Right now!
        </button>
      </div>
    </div>
  );
}
