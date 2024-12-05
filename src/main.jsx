import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink
} from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import Event from './pages/Event.jsx';
import EventDetail from './pages/EventDetail.jsx';  // Import EventDetail
import './index.css'
import Gallery from './pages/Gallery/Gallery.jsx';
import Result from './pages/Result/Result.jsx';
import ContactPage from './pages/components/ContactPage.jsx';
import GalleryDetail from './pages/GalleryDetail/GalleryDetail.jsx';
import WebTeam from './pages/WebTeam.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "events",
        element: <Event />,
      },
      {
        path: "events/:id",  // Add dynamic route for EventDetail
        element: <EventDetail />,
      },
      {
        path: "gallery",  // Add dynamic route for EventDetail
        element: <Gallery />,
      },
      {
        path: "results",  // Add dynamic route for EventDetail
        element: <Result />,
      },
      {
        path: "contact",  // Add dynamic route for EventDetail
        element: <ContactPage />,
      },
      {
         path: "gallery/:id",  // Add dynamic route for EventDetail
        element: <GalleryDetail />,
       },
      {
         path: "webteam",  // Add dynamic route for EventDetail
        element: <WebTeam />,
       },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
