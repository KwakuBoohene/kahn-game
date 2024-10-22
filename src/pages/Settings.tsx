import Button from "../components/CustomButton";
import { useEffect, useState } from "react";
import { useSettingsStore } from "../store/settings";

export default function Settings() {
  const settings = useSettingsStore((state) => state.settings);
  const audio = useSettingsStore((state) => [state.audio])[0];
  const setSoundEffects = useSettingsStore((state) => state.setSettings);

  const toggleMusic = async (status: boolean) => {
    if (status) {
      try {
        await audio.play();
      } catch (error) {
        console.error(`Error playing audio: ${error}`);
      }
    } else {
      audio.pause();
    }
  };

  const toggleSoundEffects = (status: boolean) => {
    setSoundEffects({ sound_effects: status });
  };

  return (
    <div className="">
      <div className="flex justify-between my-2 items-center ">
        <span className="">Music</span>
        <span className="mx-2">
          <span className="flex w-36 justify-between ">
            <Button className="" onClick={() => toggleMusic(true)}>
              On
            </Button>
            <Button className="" onClick={() => toggleMusic(false)}>
              Off
            </Button>
          </span>
        </span>
      </div>

      <div className="flex justify-between items-center my-2">
        <span className="">Sound Effects</span>
        <span className="mx-2">
          <span className="flex w-36 justify-between ">
            <Button className="" onClick={() => toggleSoundEffects(true)}>
              On
            </Button>
            <Button
              alwaysSilent={true}
              className=""
              onClick={() => toggleSoundEffects(false)}
            >
              Off
            </Button>
          </span>
        </span>
      </div>
    </div>
  );
}
