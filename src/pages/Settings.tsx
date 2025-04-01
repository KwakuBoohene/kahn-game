import { useState } from "react";
import { useSettingsStore } from "../store/settings";
import { Switch } from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const settings = useSettingsStore((state) => state.settings);
  const audio = useSettingsStore((state) => [state.audio])[0];
  const setSoundEffects = useSettingsStore((state) => state.setSettings);
  const [musicVolume, setMusicVolume] = useState(50);
  const [sfxVolume, setSfxVolume] = useState(50);
  const [language, setLanguage] = useState("ENGLISH");
  const [vibration, setVibration] = useState(false);

  const toggleMusic = async (value: number) => {
    setMusicVolume(value);
    if (value > 0) {
      try {
        audio.volume = value / 100;
        await audio.play();
      } catch (error) {
        console.error(`Error playing audio: ${error}`);
      }
    } else {
      audio.pause();
    }
  };

  const toggleSoundEffects = (value: number) => {
    setSfxVolume(value);
    setSoundEffects({ sound_effects: value > 0 });
  };

  return (
    <div className="p-6 max-w-md mx-auto text-black">
      {/* Back Button */}
      <div className="flex items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="bg-transparent border-none p-0"
        >
          <IoChevronBack size={32} className="text-black" />
        </button>
      </div>

      {/* Settings Title */}
      <h1 className="text-4xl mb-12 anton-font text-black">Settings</h1>

      {/* Language Section */}
      <div className="mb-12">
        <h2 className="text-2xl mb-6 anton-font text-black">Language</h2>
        <div className="flex items-center justify-between bg-[#FFE0B2] rounded-lg p-4">
          <button className="bg-transparent border-none p-0">
            <IoChevronBack size={24} className="text-black" />
          </button>
          <span className="text-black text-xl">{language}</span>
          <button className="bg-transparent border-none p-0">
            <IoChevronForward size={24} className="text-black" />
          </button>
        </div>
      </div>

      {/* Audio Section */}
      <div className="mb-12">
        <h2 className="text-2xl mb-6 anton-font text-black">Audio</h2>
        
        {/* Music Slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="anton-font text-black">Music</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={musicVolume}
            onChange={(e) => toggleMusic(parseInt(e.target.value))}
            className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </div>

        {/* SFX Slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="anton-font text-black">SFX</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sfxVolume}
            onChange={(e) => toggleSoundEffects(parseInt(e.target.value))}
            className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </div>
      </div>

      {/* Vibration Toggle */}
      <div className="mb-12">
        <div className="flex justify-between items-center bg-[#FFE0B2] rounded-lg p-4">
          <span className="anton-font text-black">Vibration</span>
          <Switch
            size="lg"
            colorScheme="green"
            isChecked={vibration}
            onChange={(e) => setVibration(e.target.checked)}
          />
        </div>
      </div>

      {/* Version and User ID */}
      <div className="text-gray-500 text-sm">
        <p className="mb-2">Version 1.0.0</p>
        <p>User ID: DG34J3J4S54K3D</p>
      </div>
    </div>
  );
}
