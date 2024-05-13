import { useEffect, useRef, useState } from "react";
import { useGameStore } from "../store/game";
import { Deck, DeckData } from "../types/deck.model";
import GameTimer from "../components/shared/Timer";

export default function Live() {
  const deck = useGameStore((state) => state.selected_deck);
  const game_time = useGameStore((state) => state.duration);
  const score = useGameStore((state) => state.team_one.score);
  const  setScore = useGameStore((state) => state.setTeamOneScore);
  const [time_left,setTimeLeft] = useState(game_time);
  const [cardnumber, setCardnumber] = useState(0);
  const [cards, setCards] = useState<DeckData[]>(deck.data);
  const goToNextCard = () => {
    if (cardnumber === cards.length - 1) {
      setCardnumber(0);
    } else {
      setCardnumber(cardnumber + 1);
    }
  }
  const increaseScore = () => {
    setScore(score + 1);
    goToNextCard();
  }
  const decreaseScore = () => {
    setScore(score - 1);
    goToNextCard();
  }

  const getTimeFromTimer = (e: number) => {
   console.log(e);
   setTimeLeft(e);
  }

  useEffect(() => {},[])

  return (
    <div>
      {
        (cardnumber === cards.length - 1 )||time_left===0? (
          <div>
            <div className="text-3xl font-bold my-4">Game Over</div>
            <div className="text-2xl my-4">Your score is {score}</div>
          </div>
        ) : (
          <>
           <GameTimer game_time={game_time} sendTimeToParent={getTimeFromTimer} />
      <div className="">
                  {time_left}
                <div className="">
                  <div className="font-bold text-3xl my-4">{cards[cardnumber].word}</div>
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
        <button className="">Right</button>
        <button className="">Wrong</button>
        <button className="">Skip</button>
      </div>
          </>
        )
      }
     
    </div>
  );
}
