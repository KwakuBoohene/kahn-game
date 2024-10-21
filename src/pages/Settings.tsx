import { Button } from '@chakra-ui/react';
import { useEffect, useState} from "react";
import {useSettingsStore} from '../store/settings'

export default function Settings(){

    // const settings = useSettingsStore((state)=>state.settings)
    const audio = useSettingsStore((state)=>[state.audio])[0]
    
    const toggleMusic = async (status: boolean) => {
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
            <span className="mx-2">
                <span className="flex w-36 justify-between ">

                    <Button className="" onClick={() => toggleMusic(true)}>On</Button>
                    <Button className="" onClick={() => toggleMusic(false)}>Off</Button>
                </span>
            </span>
        </div>

        <div className="flex justify-between items-center my-2">
            <span className="">Sound Effects</span>
            <span className="mx-2">
                <span className="flex w-36 justify-between ">
                    <Button className="">On</Button>
                    <Button className="">Off</Button>
                </span>
            </span>
        </div>
    </div>)

}
