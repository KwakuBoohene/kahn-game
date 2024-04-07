export default function StartGame() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="">
          <div className="bg-black  px-4 py-3 rounded-lg duration-300 mr-5">
            <span className="px-2">Group 1</span>{" "}
            <button className="">Edit</button>
          </div>
        </div>
        <div className="">
        <div className="bg-black  px-4 py-3 rounded-lg duration-300 ml-5">
          <span className="px-2">Group 2</span>{" "}
            <button className="">Edit</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-4">
        <span className="py-2 px-4 bg-blue-500">
          <span className="">Each turn is </span> <span className="">60s</span>
        </span>
        <span className="py-2 px-4 bg-blue-500">
          <span className="">Rounds </span> <span className="">4 rounds</span>
        </span>
      </div>

      <div className="flex justify-center my-4">
        <button className="text-3xl font-bold">LETS PLAY!!!</button>
      </div>
    </div>
  );
}
