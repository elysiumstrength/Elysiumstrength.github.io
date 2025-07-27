import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import NotFound from '../pages/NotFound';

const Home      = lazy(() => import('../pages/Home'));
const About     = lazy(() => import('../pages/About'));
const Trainers  = lazy(() => import('../pages/Trainers'));
const Wellness  = lazy(() => import('../pages/Wellness'));

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: 'trainers',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Trainers />
            </Suspense>
          ),
        },
        {
          path: 'wellness',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Wellness />
            </Suspense>
          ),
        },
      ],
    },
  ]);
