import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { Button } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
        onAnimationComplete={() => {
          const overlay = document.querySelector('.overlay');
          if (overlay) {
            overlay.classList.add('pointer-events-none');
          }
        }}
        className="fixed inset-0 bg-kahn-orange w-full z-50  overlay flex items-center justify-center"
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
      
      <PageHeader />

<div className="menu-options flex justify-center flex-col md:flex-row">
  <Card
    title="G rsv G"
    description="Go head to head with another group"
    routing="/play"
  />
  <Card
    title="Settings"
    description="Modify the settings of the game"
    routing="/settings"
  />
  <Card
    title="Decks"
    description="Create A custom deck, download a new deck to play with"
    routing="/decks"
  />
</div>

<div className="flex w-full justify-center my-10">
  <Button
    colorScheme="yellow"
    onClick={() => navigate("/login")}
    className="w-[70%] text-black"
  >
    Login
  </Button>
</div>
    </>
  );
}
