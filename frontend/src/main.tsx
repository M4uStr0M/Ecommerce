import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'
import { BrowserRouter } from 'react-router-dom'

const publishableKey: string = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!publishableKey) {
  throw new Error('Clerk Publishable Key is missing')
}

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={publishableKey} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
