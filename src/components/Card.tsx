import { useNavigate } from "react-router-dom";

export default function Card(props: {
  title: string;
  description: string;
  routing?: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(props.routing || "");
      }}
      className="max-h-[250px] rounded-lg border-2 border-blue-800 bg-blue-800 max-w-[250px] p-10 m-4 cursor-pointer hover:border-button-outline"
    >
      <p className="font-bold text-lg">{props.title}</p>
      <p className="">{props.description}</p>
    </div>
  );
}
