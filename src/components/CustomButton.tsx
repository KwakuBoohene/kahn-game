

import { Button, ButtonProps } from '@chakra-ui/react';
import useSound from 'use-sound';
import { useSettingsStore } from '../store/settings';
import soundeffect from "../assets/music/button-202966.mp3"

interface CustomButtonProps extends ButtonProps {
  soundUrl?: string;
  alwaysSilent?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, ...props }) => {
  const [play] = useSound(soundeffect);
  const playSoundEffect = useSettingsStore((state) => state.settings.sound_effects);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (playSoundEffect && !props.alwaysSilent) {
      console.log('Playing sound effect');
      play(); 
    }

    if (onClick) {
      onClick(e); // Call the original onClick handler if provided
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {props.children}
    </Button>
  );
};

export default CustomButton;