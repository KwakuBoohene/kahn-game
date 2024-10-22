import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import letItGo from '../assets/music/let-it-go-12279.mp3'

export interface SettingStore {
    settings:{
      sound_effects: boolean,
      audio: HTMLAudioElement
    },
    setSettings: (settings:{sound_effects:boolean}) => void
}


const settingsStore = (set:Function) => ({
  settings:{
    music: false,
    sound_effects: true,
  },
  audio: new Audio(letItGo),
    setSettings: (settings:{sound_effects:boolean}) => set({settings})
     
})

export const useSettingsStore = create(devtools(settingsStore));
