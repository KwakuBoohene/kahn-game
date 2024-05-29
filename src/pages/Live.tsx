import { useEffect, useRef, useState } from "react";
import { useGameStore } from "../store/game";
import { Deck, DeckData } from "../types/deck.model";

import GameTimer from "../components/shared/Timer";

export default function Live() {
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

  useEffect(() => {}, []);

  return (
    <div>
      {cardnumber === cards.length - 1 || time_left === 0 ? (
        <div>
          <div className="text-3xl font-bold my-4">
            {selected_round !== rounds ? "Round" : "game"} Over
          </div>
          {selected_round === rounds ? (
            <>
              <div className="text-2xl my-4">Team One: {team_one.score}</div>
              <div className="text-2xl my-4">Team Two: {team_two.score}</div>
            </>
          ) : (
            <>
              <div className="text-2xl my-4">
                Your score is{" "}
                {selected_team === 1 ? team_one.score : team_two.score}
              </div>
              <div className="">
                <button onClick={goToNextTeam} className="">
                { selected_round===rounds?'Restart': 'Go To next Team'}
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
        <div className="">Team : {selected_team===1?team_one.name:team_two.name}</div>
        <div className="">Round: {selected_round}</div>
        <div className="">points: {selected_team===1?team_one.score:team_two.score}</div>
          <GameTimer
            game_time={game_time}
            sendTimeToParent={getTimeFromTimer}
          />
          <div className="">
           
            <div className="">
              <div className="font-bold text-3xl my-4">
                {cards[cardnumber].word}
              </div>
              {cards[cardnumber].describing_words.map((word, index) => {
                return (
                  <div key={index} className="text-lg my-4">
                    {word}
                  </div>
                );
              })}
            </div>

            <div className=""></div>
          </div>
          <div className="flex justify-between my-10 text-lg">
            <button onClick={() => increaseScore()} className="">
              Right
            </button>
            <button onClick={() => decreaseScore()} className="">
              Wrong
            </button>
            <button onClick={() => goToNextCard()} className="">
              Skip
            </button>
          </div>
        </>
      )}
    </div>
  );
}
