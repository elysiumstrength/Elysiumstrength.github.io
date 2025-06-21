import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import NotFound from '../pages/NotFound'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

export const router = createBrowserRouter([
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
    ],
  },
])
