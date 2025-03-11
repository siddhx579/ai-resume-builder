import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import SignInPage from './pages/auth/sign-in';
import { neobrutalism } from '@clerk/themes';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import SignUpPage from './pages/auth/sign-up';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element:<App />,
    children:[
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage />
  },
  {
    path:'/auth/sign-up',
    element:<SignUpPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{ baseTheme: neobrutalism }}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)