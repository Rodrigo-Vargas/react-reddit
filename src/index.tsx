import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/detail',
      element: <DetailPage />,
   },
]);

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
