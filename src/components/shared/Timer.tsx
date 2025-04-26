import { useRef, useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  game_time: number;
  sendTimeToParent: Function;
  isEditable?: boolean;
  setGameTime?: (time: number) => void;
}

export default function GameTimer(props: TimerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [minutes, setMinutes] = useState(Math.floor(props.game_time / 60));
  const [seconds, setSeconds] = useState(props.game_time % 60);
  const pickerRef = useRef<HTMLDivElement>(null);
  
  // Format time for display
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Handle time change from custom picker
  const handleTimeChange = () => {
    const totalSeconds = minutes * 60 + seconds;
    props.setGameTime?.(totalSeconds);
    setShowPicker(false);
  };
  
  // Handle click to show time picker
  const handleClick = () => {
    if (props.isEditable) {
      setShowPicker(true);
    }
  };
  
  // Handle minute change
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinutes(Math.max(0, Math.min(59, value)));
  };
  
  // Handle second change
  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setSeconds(Math.max(0, Math.min(59, value)));
  };

  // Handle Enter key to apply
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTimeChange();
    }
  };

  // Close picker when clicking outside
  useEffect(() => {
    if (!showPicker) return;
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker]);
  
  // If not editable, use the timer hook
  if (!props.isEditable) {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + props.game_time);
    
    const { seconds, minutes } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        props.sendTimeToParent(0);
      },
      autoStart: true,
    });
    
    return (
      <h1 className="text-5xl font-bold text-black">
        {formatTime(minutes * 60 + seconds)}
      </h1>
    );
  }
  
  // If editable, show the custom time picker
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="flex items-center gap-2">
        <div 
          onClick={handleClick}
          className="text-5xl font-bold text-black cursor-pointer"
        >
          {formatTime(props.game_time)}
        </div>
      </h1>
      
      {showPicker && (
        <div ref={pickerRef} className="absolute left-1/2 top-full mt-2 z-50" style={{transform: 'translateX(-50%)'}}>
          <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col items-center min-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex flex-col items-center">
                <label className="text-sm text-gray-600">Minutes</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={handleMinuteChange}
                  onKeyDown={handleKeyDown}
                  className="w-16 p-2 border border-gray-300 rounded text-center text-xl"
                />
              </div>
              <div className="text-2xl font-bold mt-6">:</div>
              <div className="flex flex-col items-center">
                <label className="text-sm text-gray-600">Seconds</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={handleSecondChange}
                  onKeyDown={handleKeyDown}
                  className="w-16 p-2 border border-gray-300 rounded text-center text-xl"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 w-full">
              <button 
                onClick={() => setShowPicker(false)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button 
                onClick={handleTimeChange}
                className="px-3 py-1 bg-kahn-orange-dark text-white rounded hover:bg-kahn-orange-light"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}