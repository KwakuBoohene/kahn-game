import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import GameSelectionButton from "../components/GameSelectionButton";

interface GameMode {
  title: string;
  subtitle: string;
  route: string;
}

const GAME_MODES: GameMode[] = [
  {
    title: "TEAM MODE",
    subtitle: "Play in groups of 2 or more",
    route: "/team-mode",
  },
  {
    title: "ONE VS ALL MODE",
    subtitle: "Play against each other",
    route: "/one-vs-all",
  },
];

export default function Play() {
  const navigate = useNavigate();

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
                title={mode.title}
                subtitle={mode.subtitle}
                onClick={() => navigate(mode.route)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
