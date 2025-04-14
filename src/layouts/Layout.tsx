import { ReactNode, useEffect } from "react";
import song_1 from "../assets/music/80x-lo-fi-jazz-201651.mp3";
import useSound from "use-sound";


export default function Layout(props: { children: ReactNode }) {
  const [play] = useSound(song_1);

  useEffect(() => {
    // play();
  }, []);
  return <div className="h-full min-w-[375px] w-full m-1 p-4">{props.children}</div>;
}
