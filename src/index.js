import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AllPlayer from './pages/allPlayerView';
import AdminView from './pages/AdminView/Admin';
import PlayerForm from './components/playerSignup';
import GameUI from './pages/GameUi/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <AllPlayer/>
      </div>
    ),
  },
  {
    path: "/admin",
    element: <AdminView/>,
  },
  {
    path: "/newUser",
    element: <PlayerForm/>,
  },
  {
    path: "/vote",
    element: <GameUI/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
