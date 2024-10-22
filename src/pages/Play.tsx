import { decks } from "../data/deck";
import { useNavigate } from "react-router-dom";
import { GameStore, useGameStore } from "../store/game";
import Button from "../components/CustomButton";

export default function Play() {
  const navigate = useNavigate();
  const setDeck = useGameStore((state: GameStore) => state.setDeck);
  return (
    <div className="">
      <div className="">Please select a deck to play with </div>
      <div className="flex py-10">
        {decks.map((deck, index: number) => (
          <Button color='white' bg='green.500'
            key={index}
            onClick={() => {
              setDeck(deck);
              navigate("/start-game");
            }}
            className="mx-2"
          >
            <div className="">{deck.name}</div>
          </Button>
        ))}
      </div>
      <div className="">OR</div>
      <div className="py-2">
        <Button color='white' bg='green.500'
          onClick={() => {
            navigate("/start-game");
          }}
          className=""
        >
          Get Started Right now!
        </Button>
      </div>
    </div>
  );
}
