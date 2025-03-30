import { useNavigate } from "react-router-dom";
import { useSettingsStore } from "../store/settings";
import useSound from "use-sound";
import soundeffect from "../assets/music/button-202966.mp3";

// Define a mapping of routes to background images
const cardBackgrounds: { [key: string]: string } = {
  "/play": "/assets/images/localPlay.svg",
  "/settings": "/assets/images/cardDeck.jpeg",
  "/decks": "/assets/images/onlinePlay.jpeg"
};

export default function Card(props: {
  title: string;
  description: string;
  routing?: string;
  icon?: string;
  bgImage: string;
}) {
  const navigate = useNavigate();
  const playSoundEffect = useSettingsStore(
    (state) => state.settings.sound_effects
  );
  const [play] = useSound(soundeffect);

  return (
    <div
      onClick={() => {
        if (playSoundEffect) {
          play();
        }
        navigate(props.routing || "");
      }}
      className="w-full max-w-md rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 mb-4"
      style={{
        aspectRatio: '1/1.2',
      }}
    >
      <div 
        className="relative w-full h-full group"
        style={{
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-between p-8 text-white">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <img src={props.icon} alt="" className="w-6 h-6" />
          </div>
          
          {/* Text content */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">{props.title}</h2>
            <p className="text-sm text-white/90">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
