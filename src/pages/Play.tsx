import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import GameSelectionButton from "../components/GameSelectionButton";
import { useGameStore } from "../store/game";
import { GameMode, GameModeOption } from "../types/game.types";

const GAME_MODES: GameModeOption[] = [
  {
    title: "TEAM MODE",
    subtitle: "Play in groups of 2 or more",
    route: "/local-team-settings",
    mode: {
      isOnline: false,
      type: "team"
    }
  },
  {
    title: "ONE VS ALL MODE",
    subtitle: "Play against each other",
    route: "/one-vs-all",
    mode: {
      isOnline: false,
      type: "one_v_one"
    }
  },
];

export default function Play() {
  const navigate = useNavigate();
  const setGameMode = useGameStore(state => state.setGameMode);

  const handleModeSelection = (mode: GameModeOption) => {
    setGameMode(mode.mode);
    navigate(mode.route);
  };

  return (
    <>
      <div className="">
        <PageHeader />
        
        <div className="flex flex-col items-center mt-8 container mx-auto py-8 max-w-lg">
          <h1 className="text-2xl font-bold mb-2 text-black">LOCAL PLAY</h1>
          <p className="text-gray-600 mb-8">
            Select which mode you would like to play
          </p>

          <div className="w-full space-y-6">
            {GAME_MODES.map((mode, index) => (
              <GameSelectionButton
                key={index}
                onClick={() => handleModeSelection(mode)}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-black">{mode.title}</h1>
                  <span className="text-sm text-black/60">{mode.subtitle}</span>
                </div>
              </GameSelectionButton>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
