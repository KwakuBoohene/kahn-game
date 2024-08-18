import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Play from "./pages/Play.tsx";
import Settings from "./pages/Settings.tsx";
import Decks from "./pages/Decks.tsx";
import StartGame from "./pages/StartGame.tsx";
import Live from "./pages/Live.tsx";
import Login from "./pages/Login.tsx";
import Layout from "./layouts/Layout.tsx";

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
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
    <RouterProvider router={router}></RouterProvider>
    </Layout>
   
  </React.StrictMode>
);
