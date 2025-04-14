import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";

interface TeamProps {
  name: string;
  editable?: boolean;
  onNameChange?: (name: string) => void;
}

function TeamNameButton({ name, editable = true, onNameChange }: TeamProps) {
  return (
    <div className="relative h-24 my-1">
      <div className="absolute inset-0 bg-kahn-orange-dark rounded-3xl">
        <div className="flex items-center h-full px-6">
          <span className="text-black cursor-pointer">✎</span>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange?.(e.target.value)}
            disabled={!editable}
            className="bg-transparent text-3xl font-bold text-black w-full focus:outline-none px-2"
          />
        </div>
      </div>
    </div>
  );
}

export default function LocalGame() {
  const navigate = useNavigate();
  const [team1Name, setTeam1Name] = useState("TEAM 1");
  const [team2Name, setTeam2Name] = useState("TEAM 2");
  const [roundCount, setRoundCount] = useState(2);
  const [timeLimit] = useState("1:07"); // This would be connected to a timer component in reality

  return (
    <>
      <div className="">
        <PageHeader />
        
        <div className="flex flex-col items-center mt-8 container mx-auto py-8 max-w-lg">
          <h1 className="text-2xl font-bold mb-2 text-black">LOCAL GAME LOBBY</h1>
          <p className="text-gray-600 mb-8">
            Edit your game settings below
          </p>

          {/* Timer Display */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-4xl font-bold">{timeLimit}</span>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-black font-semibold">ROUND NOS</span>
              <input
                type="number"
                value={roundCount}
                onChange={(e) => setRoundCount(Number(e.target.value))}
                className="w-12 text-center bg-kahn-orange-light rounded-xl p-1"
                min={1}
              />
            </div>
          </div>

          {/* Team Names Section */}
          <div className="w-full space-y-2 relative">
            <TeamNameButton name={team1Name} onNameChange={setTeam1Name} />
            <div className="absolute left-1/2 -translate-x-1/2 z-10 text-6xl font-bold text-white">
              VS
            </div>
            <TeamNameButton name={team2Name} onNameChange={setTeam2Name} />
          </div>

          {/* Start Game Button */}
          <div className="mt-12 w-full">
            <button
              onClick={() => navigate("/game")}
              className="w-full bg-kahn-orange-dark hover:bg-kahn-orange-light text-white font-bold py-4 rounded-full transition-colors"
            >
              START GAME
            </button>
          </div>

          {/* Deck Selection */}
          <div className="mt-6 flex items-center space-x-2 text-black">
            <span>✎</span>
            <span>Ultra Deck (2/5)</span>
          </div>
        </div>
      </div>
    </>
  );
}
