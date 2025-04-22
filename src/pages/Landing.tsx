import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { Button } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";

// Import your icons and images
import gamepadIcon from "../assets/icons/localPlayIcon.png";
import deckIcon from "../assets/icons/decksIcon.png";
import onlineIcon from "../assets/icons/onlinePlayIcon.svg";
import localPlayBg from "../assets/background_images/localPlayBg.svg";
import decksBg from "../assets/background_images/cardDeckBg.jpeg";
import onlinePlayBg from "../assets/background_images/onlinePlayBg.jpeg";

const cards = [
  {
    title: "Local Play",
    description: "Play together with friends on same device",
    routing: "/select-mode",
    icon: gamepadIcon,
    bgImage: localPlayBg
  },
  {
    title: "Decks",
    description: "View & create custom decks",
    routing: "/decks",
    icon: deckIcon,
    bgImage: decksBg
  },
  // {
  //   title: "Online Play",
  //   description: "Play with friends all over the world",
  //   routing: "/online",
  //   icon: onlineIcon,
  //   bgImage: onlinePlayBg
  // }
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="fixed inset-0 bg-kahn-orange w-full z-50 pointer-events-none flex justify-center items-center"
      >
        <motion.img 
          src={logo} 
          alt="Kaneho Logo" 
          className="w-96 h-auto"
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <PageHeader />

        <div className="container mx-auto px-4 py-8 max-w-lg">
          <div className="grid grid-cols-1 md:flex gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                routing={card.routing}
                icon={card.icon}
                bgImage={card.bgImage}
              />
            ))}
          </div>
        </div>

        
      </motion.div>
    </>
  );
}
