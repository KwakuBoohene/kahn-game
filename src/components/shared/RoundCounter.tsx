interface RoundCounterProps {
  currentRound: number;
  totalRounds: number;
  roundIsEditable: boolean;
  setCurrentRound: (round: number) => void;
}

export default function RoundCounter({
  currentRound,
  totalRounds,
  roundIsEditable,
  setCurrentRound,
}: RoundCounterProps) {
  return (
    <h1 className="flex items-center relative cursor-pointer">
      <div className="flex rounded-full overflow-hidden">
        <div className=" flex items-center z-10">
          <span className="font-bold text-black text-lg rounded-r-full bg-kahn-orange-dark h-full px-4 py-2">
            ROUND
          </span>
        </div>
        <div className="bg-white px-4 py-2 flex justify-end absolute w-[110px] rounded-full ">
          {roundIsEditable ? (
            <input
              type="number"
              value={currentRound}
              onChange={(e) => setCurrentRound(Number(e.target.value))}
              className="text-black border-red-500 outline-none bg-transparent w-4 font-bold text-lg float-right"
              min={1}
            />
          ) : (
            <span className="text-black font-bold text-lg float-right">
              {currentRound}
            </span>
          )}
        </div>
      </div>
    </h1>
  );
}
