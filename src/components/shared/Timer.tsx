import { useEffect, useRef, useState } from "react";

interface props {
    game_time: number;
    sendTimeToParent: Function;
    isEditable?: boolean;
    setGameTime?: (time: number) => void;
}

export default function GameTimer(props: props) {
    const Ref: React.MutableRefObject<null | number> = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(new Date().toISOString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: string) => {
        if (props.isEditable) return;
        
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
            props.sendTimeToParent(seconds);
        }
    };

    const clearTimer = (e: string) => {
        if (props.isEditable) return;
        
        setTimer("00:00:" + props.game_time);
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
        if (!props.isEditable) {
            clearTimer(getDeadTime().toISOString());
        } else {
            // Format the initial time for editable mode
            const minutes = Math.floor(props.game_time / 60);
            const seconds = props.game_time % 60;
            setTimer(`00:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }
    }, [props.game_time]);

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [minutes, seconds] = e.target.value.split(':').map(Number);
        const totalSeconds = minutes * 60 + seconds;
        props.setGameTime?.(totalSeconds);
    };

    return props.isEditable ? (
        <h1 className="flex items-center gap-2">
            <input
                type="time"
                value={`00:${timer.split(':').slice(1).join(':')}`}
                onChange={handleTimeChange}
                step="1"
                className="text-5xl font-bold text-black bg-transparent w-full focus:outline-none"
            />
        </h1>
    ) : (
        <h1 className="text-5xl font-bold text-black">{timer}</h1>
    );
}