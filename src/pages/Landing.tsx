import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="">
            <span className="">KaNeHo</span>
        </div>
     <div className="menu-options flex justify-center flex-col md:flex-row">
        <Card title='G v G' description="Go head to head with another group" routing="/play"/>
        <Card title='Settings' description="Modify the settings of the game" routing="/settings"/>
        <Card title='Decks' description="Create A custom deck, download a new deck to play with" routing='/decks'/>
     </div>

     <div className="flex w-full justify-center my-10">
      <button onClick={()=>navigate('/login')} className="w-[70%] bg-blue-800">Login</button>
     </div>
    </div>
  );
}