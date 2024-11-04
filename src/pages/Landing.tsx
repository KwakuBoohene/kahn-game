import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import {Button} from '@chakra-ui/react'
import logo from "../assets/kaneho_logo.jpg"


export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="w-full flex justify-center">
            <img src={logo} alt="" className="w-96 h-auto" />
        </div>
     <div className="menu-options flex justify-center flex-col md:flex-row">
        <Card title='G v G' description="Go head to head with another group" routing="/play"/>
        <Card title='Settings' description="Modify the settings of the game" routing="/settings"/>
        <Card title='Decks' description="Create A custom deck, download a new deck to play with" routing='/decks'/>
     </div>

     <div className="flex w-full justify-center my-10">
      <Button colorScheme="yellow" onClick={()=>navigate('/login')} className="w-[70%] text-black">Login</Button>
     </div>
    </div>
  );
}