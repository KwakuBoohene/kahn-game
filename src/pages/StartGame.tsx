import { useFormik } from "formik";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/game";

export default function StartGame() {
  const naivgate = useNavigate();
  const setTeamOneName = useGameStore((state) => state.setTeamOneName);
  const setTeamTwoName = useGameStore((state) => state.setTeamTwoName);
  const team1 = useGameStore((state) => state.team_one.name);
  const team2 = useGameStore((state) => state.team_two.name);
  const inputField1 = useRef<HTMLInputElement>(null);
  const inputField2 = useRef<HTMLInputElement>(null);
  const time = useGameStore((state) => state.duration);
  const formik = useFormik({
    initialValues: {
      team1: team1,
      team2: team2,
      time: time,
    },
    onSubmit: (values) => {
      setTeamOneName(values.team1);
      setTeamTwoName(values.team2);
      naivgate("/live");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <div className="flex justify-between">
        <div className="">
          <div className="bg-black  px-4 py-3 rounded-lg duration-300 mr-5">
            <input
              ref={inputField1}
              name="team1"
              onChange={formik.handleChange}
              value={formik.values.team1}
              placeholder={formik.values.team1}
              type="text"
              className={" max-w-16 bg-transparent"}
            />
            <button
              type="button"
              onClick={() => inputField1.current?.focus()}
              className="ml-2"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="">
          <div className="bg-black  px-4 py-3 rounded-lg duration-300 ml-5">
            <input
              ref={inputField2}
              name="team2"
              onChange={formik.handleChange}
              value={formik.values.team2}
              placeholder={formik.values.team2}
              type="text"
              className={" max-w-16 bg-transparent"}
            />

            <button
              type="button"
              onClick={() => inputField2.current?.focus()}
              className="ml-2"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-4">
        <span className="py-2 px-4 bg-blue-500">
          <span className="">Each turn is </span>   <input
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
              placeholder={String(formik.values.time)}
              type="number"
              className={" max-w-6 bg-transparent underline cursor-pointer"}
            /> <span className="">s</span>
        </span>
        <span className="py-2 px-4 bg-blue-500">
          <span className="">Rounds </span> <span className="">4 rounds</span>
        </span>
      </div>

      <div className="flex justify-center my-4">
        <button type="submit" className="text-3xl font-bold">
          LETS PLAY!!!
        </button>
      </div>
    </form>
  );
}
