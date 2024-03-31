import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import Play from './pages/Play.tsx';
import Settings from './pages/Settings.tsx';
import Decks from './pages/Decks.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/decks',
    element: <Decks />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
    <RouterProvider router={router} />
    </App>
    
   
    
  </React.StrictMode>,
)
