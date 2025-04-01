import Landing from "./pages/Landing.tsx";
import Play from "./pages/Play.tsx";
import Settings from "./pages/Settings.tsx";
import Decks from "./pages/Decks.tsx";
import StartGame from "./pages/StartGame.tsx";
import Live from "./pages/Live.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/play",
      element: <Play />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/decks",
      element: <Decks />,
    },
    {
      path: "/start-game",
      element: <StartGame/>
    },
    {
      path:'/live',
      element: <Live/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <SignUp/>
    }
  ]);

  export default router;