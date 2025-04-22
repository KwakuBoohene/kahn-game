import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../components/shared/PageHeader";
import GameSelectionButton from "../../components/GameSelectionButton";

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
  const [timeLimit] = useState("1:07"); // This would be connected to a timer component in reality
  const [showVS, setShowVS] = useState(true);

  const teams: TeamInput[] = [
    { id: 1, name: team1Name, setName: setTeam1Name },
    { id: 2, name: team2Name, setName: setTeam2Name },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVS(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* VS Overlay */}
      <motion.div 
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: showVS ? 1 : 0,
          scale: showVS ? 1 : 0.75,
        }}
        transition={{ duration: 1, ease: "easeOut" }} // Reduced from 0.75s to 0.5s
      >
        <h1 className="text-[450px] font-bold text-white">VS</h1>
      </motion.div>

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
              onClick={() => navigate("/live")}
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
    </>
  );
}
