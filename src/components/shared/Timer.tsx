import { useEffect, useRef, useState } from "react";

interface props {
    game_time:number,
    sendTimeToParent:Function
}

export default function GameTimer(props:props){
    const Ref:React.MutableRefObject<null|number> = useRef(null);
    const [timer, setTimer] = useState("00:00:00");
   
    const getTimeRemaining = (e:string) => {
      const total =
          Date.parse(e) - Date.parse(new Date().toISOString());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor(
          (total / 1000 / 60) % 60
      );
      const hours = Math.floor(
          (total / 1000 / 60 / 60) % 24
      );
      return {
          total,
          hours,
          minutes,
          seconds,
      };
  };

  const startTimer = (e:string) => {
    let { total, hours, minutes, seconds } =
        getTimeRemaining(e);
    if (total >= 0) {

        setTimer(
            (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9
                ? minutes
                : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
        props.sendTimeToParent(seconds)
    }
};

const clearTimer = (e:string) => {
    setTimer("00:00:"+props.game_time);
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
      
      
    }, 1000);
    Ref.current = id;
  };
  
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + props.game_time);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime().toISOString());
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime().toISOString());
  };

return (
    <div className="text-xl font-bold">{timer}</div>
)
}