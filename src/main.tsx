
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// Hard-coded publishable key (not recommended for production)
const PUBLISHABLE_KEY = "pk_test_cmVmaW5lZC1maXJlZmx5LTM3LmNsZXJrLmFjY291bnRzLmRldiQ"

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
