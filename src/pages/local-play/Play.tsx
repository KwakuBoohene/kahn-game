import { useEffect, useState } from "react";
import { useGameStore } from "../../store/game";
import { DeckData } from "../../types/deck.model";
import { useNavigate } from "react-router-dom";
import GameTimer from "../../components/shared/Timer";
import PageHeader from "../../components/shared/PageHeader";
import RoundCounter from "../../components/shared/RoundCounter";

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
  const [isGameOver, setIsGameOver] = useState(false);
  const [time_left, setTimeLeft] = useState(game_time);
  const [cardnumber, setCardnumber] = useState(0);
  const [cards, setCards] = useState<DeckData[]>(deck.data);

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
    if (selected_team === 1) {
      setSelectedTeam(2);
      resetTimer();
    } else {
      setSelectedTeam(1);
      setSelectedRound(selected_round + 1);
      selected_round === rounds ? setIsGameOver(true) : resetTimer();
    }
  };

  return (
    <div className="min-h-screen  px-4">
      <PageHeader showProfile={false} showSettings={false} />
      
      <div className="pt-8 flex justify-between items-center text-black">
        <button onClick={() => navigate("/")} className="text-2xl">⌂</button>

        <button className="text-2xl">?</button>
      </div>

      {cardnumber === cards.length - 1 || time_left === 0 ? (
        <div className="text-center">
          <div className="text-3xl font-bold my-4">
            {selected_round !== rounds ? "Round" : "Game"} Over
          </div>
          {selected_round === rounds ? (
            <>
              <div className="text-2xl my-4">Team One: {team_one.score}</div>
              <div className="text-2xl my-4">Team Two: {team_two.score}</div>
            </>
          ) : (
            <>
              <div className="text-2xl my-4">
                Your score is {selected_team === 1 ? team_one.score : team_two.score}
              </div>
              <button
                onClick={goToNextTeam}
                className="bg-kahn-orange-dark text-white px-8 py-3 rounded-full font-bold"
              >
                {selected_round === rounds ? 'Restart' : 'Go To Next Team'}
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Timer */}
          
          <div className="px-6 py-2">
          <RoundCounter currentRound={selected_round} totalRounds={rounds} roundIsEditable={false} setCurrentRound={setSelectedRound} />
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
            <button
              onClick={goToNextCard}
              className="w-16 h-16 rounded-full bg-[#FFE4BC] flex items-center justify-center"
            >
              ⏩
            </button>
            <button
              onClick={decreaseScore}
              className="w-16 h-16 rounded-full bg-[#FFD6D6] flex items-center justify-center"
            >
              FW
            </button>
            <button
              onClick={increaseScore}
              className="w-16 h-16 rounded-full bg-[#D8EEBE] flex items-center justify-center"
            >
              ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
