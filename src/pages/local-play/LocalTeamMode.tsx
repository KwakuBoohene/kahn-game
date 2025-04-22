import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import GameSelectionButton from "../../components/GameSelectionButton";
import GameTimer from "../../components/shared/Timer";
import RoundCounter from "../../components/shared/RoundCounter";

interface TeamInput {
  id: number;
  name: string;
  setName: (name: string) => void;
}

export default function LocalGame() {
  const navigate = useNavigate();
  const [team1Name, setTeam1Name] = useState("TEAM 1");
  const [team2Name, setTeam2Name] = useState("TEAM 2");
  const [roundCount, setRoundCount] = useState(2);
  const [gameTime, setGameTime] = useState(67); // 1:07 in seconds

  const teams: TeamInput[] = [
    { id: 1, name: team1Name, setName: setTeam1Name },
    { id: 2, name: team2Name, setName: setTeam2Name },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader showProfile={false} showSettings={false} />
      
      <div className="flex flex-col items-center mt-8 container mx-auto py-8 max-w-lg">
        <h1 className="text-2xl font-bold mb-2 text-black">LOCAL GAME LOBBY</h1>
        <p className="text-gray-600 mb-8">
          Edit your game settings below
        </p>

        {/* Timer Display */}
        <div className="px-6 py-2 flex w-full justify-center">
          <GameTimer 
            game_time={gameTime} 
            sendTimeToParent={() => {}} 
            isEditable={true}
            setGameTime={setGameTime}
          />
           </div>
           <div className="my-4 flex justify-center">
            <RoundCounter 
              currentRound={roundCount} 
              totalRounds={5} 
              roundIsEditable={true}
              setCurrentRound={setRoundCount}
            />
          </div>
       

        {/* Team Names Section */}
        <div className="w-full space-y-6">
          {teams.map((team) => (
            <div key={team.id}>
              <GameSelectionButton>
                <h1 className="flex items-center w-full px-6">
                  <span className="text-black cursor-pointer">✎</span>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => team.setName(e.target.value)}
                    className="bg-transparent text-3xl font-bold text-black w-full focus:outline-none px-2"
                  />
                </h1>
              </GameSelectionButton>
            </div>
          ))}
        </div>

        {/* Start Game Button */}
        <div className="mt-12 w-full">
          <button
            onClick={() => navigate("/local-play")}
            className="w-full bg-kahn-orange-dark hover:bg-kahn-orange-light text-white font-bold py-4 rounded-full transition-colors"
          >
            <h1 className="text-2xl font-bold">START GAME</h1>
          </button>
        </div>

        {/* Deck Selection */}
        <div className="mt-6 flex items-center space-x-2 text-black">
          <span>✎</span>
          <span>Ultra Deck (2/5)</span>
        </div>
      </div>
    </div>
  );
}
