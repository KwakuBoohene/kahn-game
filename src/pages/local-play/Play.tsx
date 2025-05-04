import { useEffect, useState } from "react";
import { useGameStore } from "../../store/game";
import { DeckData } from "../../types/deck.model";
import { useNavigate } from "react-router-dom";
import GameTimer from "../../components/shared/Timer";
import PageHeader from "../../components/shared/PageHeader";
import RoundCounter from "../../components/shared/RoundCounter";
import { motion, useAnimation } from "framer-motion";

export default function Play() {
  const navigate = useNavigate();
  const deck = useGameStore((state) => state.selected_deck);
  const rounds = useGameStore((state) => state.rounds);
  const selected_round = useGameStore((state) => state.selected_round);
  const selected_team = useGameStore((state) => state.selected_team);
  const game_time = useGameStore((state) => state.duration);
  const team_one = useGameStore((state) => state.team_one);
  const team_two = useGameStore((state) => state.team_two);
  const setTeamOneScore = useGameStore((state) => state.setTeamOneScore);
  const setTeamTwoScore = useGameStore((state) => state.setTeamTwoScore);
  const setSelectedRound = useGameStore((state) => state.setSelectedRound);
  const setSelectedTeam = useGameStore((state) => state.setSelectedTeam);
  const resetGame = useGameStore((state) => state.reset);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time_left, setTimeLeft] = useState(game_time);
  const [cardnumber, setCardnumber] = useState(0);
  const [cards, setCards] = useState<DeckData[]>(deck.data);
  const [roundsLeft, setRoundsLeft] = useState(rounds);
  const [teamTurn, setTeamTurn] = useState(1); // 1 or 2

  // Animation controls
  const skipControls = useAnimation();
  const fwControls = useAnimation();
  const tickControls = useAnimation();

  useEffect(() => {
    setRoundsLeft(rounds);
    setSelectedRound(1);
    setTeamTurn(1);
    setSelectedTeam(1);
  }, [rounds, setSelectedRound, setSelectedTeam]);

  const goToNextCard = () => {
    if (cardnumber === cards.length - 1) {
      setCardnumber(0);
    } else {
      setCardnumber(cardnumber + 1);
    }
  };

  const increaseScore = () => {
    selected_team === 1
      ? setTeamOneScore(team_one.score + 1)
      : setTeamTwoScore(team_two.score + 1);
    goToNextCard();
  };

  const decreaseScore = () => {
    selected_team === 1
      ? setTeamOneScore(team_one.score - 1)
      : setTeamTwoScore(team_two.score - 1);
    goToNextCard();
  };

  const getTimeFromTimer = (e: number) => {
    setTimeLeft(e);
  };

  const resetTimer = () => {
    setTimeLeft(game_time);
  };

  const goToNextTeam = () => {
    if (teamTurn === 1) {
      setTeamTurn(2);
      setSelectedTeam(2);
      resetTimer();
    } else {
      // Both teams have played, decrement rounds left
      if (roundsLeft - 1 === 0) {
        setIsGameOver(true);
      } else {
        setRoundsLeft(roundsLeft - 1);
        setSelectedRound(selected_round + 1);
        setTeamTurn(1);
        setSelectedTeam(1);
        resetTimer();
      }
    }
  };

  // Automatically end game if last round is finished
  useEffect(() => {
    if ((cardnumber === cards.length - 1 || time_left === 0) && roundsLeft === 1 && teamTurn === 2 && !isGameOver) {
      setIsGameOver(true);
    }
  }, [cardnumber, cards.length, time_left, roundsLeft, teamTurn, isGameOver]);

  const handleRestart = () => {
    resetGame();
    setIsGameOver(false);
    setRoundsLeft(rounds);
    setSelectedRound(1);
    setTeamTurn(1);
    setSelectedTeam(1);
    setCardnumber(0);
    setCards(deck.data);
    setTimeLeft(game_time);
  };

  // Animation handlers
  const handleSkip = () => {
    skipControls.start({ x: 40, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.3 } })
      .then(() => skipControls.set({ x: 0, opacity: 1 }));
    goToNextCard();
  };
  const handleFW = () => {
    fwControls.start({ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } })
      .then(() => decreaseScore());
  };
  const handleTick = () => {
    tickControls.start({ scale: [1, 1.3, 0.9, 1.1, 1], transition: { duration: 0.4 } })
      .then(() => increaseScore());
  };

  return (
    <div className="min-h-screen  px-4">
      <PageHeader showProfile={false} showSettings={false} />
      
      <div className="pt-8 flex justify-between items-center text-black">
        <button onClick={() => navigate("/")} className="text-2xl">⌂</button>
        <button className="text-2xl">?</button>
      </div>

      {isGameOver ? (
        <div className="text-center">
          <div className="text-3xl font-bold my-4">Game Over</div>
          <div className="text-2xl my-4">Team One: {team_one.score}</div>
          <div className="text-2xl my-4">Team Two: {team_two.score}</div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleRestart}
              className="bg-kahn-orange-dark text-white px-8 py-3 rounded-full font-bold"
            >
              Restart
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-300 text-black px-8 py-3 rounded-full font-bold"
            >
              Home
            </button>
          </div>
        </div>
      ) : cardnumber === cards.length - 1 || time_left === 0 ? (
        <div className="text-center">
          <div className="text-3xl font-bold my-4">
            {roundsLeft === 1 ? "Game" : "Round"} Over
          </div>
          <div className="text-2xl my-4">
            Your score is {selected_team === 1 ? team_one.score : team_two.score}
          </div>
          {roundsLeft !== 1 && (
            <button
              onClick={goToNextTeam}
              className="bg-kahn-orange-dark text-white px-8 py-3 rounded-full font-bold"
            >
              Go To Next Team
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Timer */}
          <div className="px-6 py-2">
            <RoundCounter currentRound={selected_round}  roundIsEditable={false} setCurrentRound={setSelectedRound} />
          </div>
          <div className="my-4">
            <GameTimer game_time={game_time} sendTimeToParent={getTimeFromTimer} />
          </div>

          {/* Team Name */}
          <div className="text-[#D4A574] font-semibold mb-4">
            {selected_team === 1 ? team_one.name : team_two.name}
          </div>

          {/* Main Word */}
          <button className="w-full max-w-md bg-kahn-orange-dark rounded-full py-4 mb-6">
            <h1 className="text-4xl font-bold text-white text-center">
              {cards[cardnumber].word}
            </h1>
          </button>

          {/* Forbidden Words */}
          <div className="w-full max-w-md space-y-4 flex flex-col mb-12">
            {cards[cardnumber].describing_words.map((word, index) => (
              <button key={index} className="text-gray-600 text-lg text-center">
                {word}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between w-full max-w-md">
            <motion.button
              onClick={handleSkip}
              animate={skipControls}
              className="w-16 h-16 rounded-full bg-[#FFE4BC] flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.12, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              ⏩
            </motion.button>
            <motion.button
              onClick={handleFW}
              animate={fwControls}
              className="w-16 h-16 rounded-full bg-[#FFD6D6] flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.12, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              FW
            </motion.button>
            <motion.button
              onClick={handleTick}
              animate={tickControls}
              className="w-16 h-16 rounded-full bg-[#D8EEBE] flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.12, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              ✓
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
