import Landing from "./pages/Landing.tsx";
import SelectMode from "./pages/local-play/SelectMode.tsx";
import Settings from "./pages/Settings.tsx";
import Decks from "./pages/Decks.tsx";
import Play from "./pages/local-play/Play.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import LocalTeamMode from "./pages/local-play/LocalTeamMode.tsx";
import NotFound from "./pages/NotFound.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/select-mode",
      element: <SelectMode />,
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
      path:'/local-play',
      element: <Play/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <SignUp/>
    },
    {
      path: "/local-team-settings",
      element: <LocalTeamMode />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  export default router;