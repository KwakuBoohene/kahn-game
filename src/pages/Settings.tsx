import letItGo from '../assets/music/let-it-go-12279.mp3'
import { useState} from "react";
// import settingsStore from '../store/settings'

export default function Settings(){

    // const [settings, setSettings] = settingsStore()
    const [audio] = useState(new Audio(letItGo))


    // useEffect(() => {
    //     if (settings.music){
    //         audio.pause()
    //         audio.currentTime = 0
    //
    //     } else {
    //         audio.pause()
    //     }
    // }, [settings.music, audio])

    const toggleMusic = async (status: boolean) => {
        // setSettings({...settings, music: status})
        if (status){
            try {
                await audio.play()
            } catch (error) {
                console.error(`Error playing audio: ${error}`)
            }
        }else {
            audio.pause()
        }
    }

    return (<div className="">
        <div className="flex justify-between my-2 items-center ">
            <span className="">Music</span>
            <span className="">
                <span className="flex w-36 justify-between ">

                    <button className="" onClick={() => toggleMusic(true)}>On</button>
                    <button className="" onClick={() => toggleMusic(false)}>Off</button>
                </span>
            </span>
        </div>

        <div className="flex justify-between items-center my-2">
            <span className="">Sound Effects</span>
            <span className="">
                <span className="flex w-36 justify-between ">
                    <button className="">On</button>
                    <button className="">Off</button>
                </span>
            </span>
        </div>
    </div>)

}
