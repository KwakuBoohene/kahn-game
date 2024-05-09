import { create } from 'zustand'

const settingsStore = create((set) => ({
  settings: {
    music : true,
    sound_effects : true,
  },
    setSettings: (settings:{music:boolean,sound_effects:boolean}) => set({ settings }),
}))

export default settingsStore;