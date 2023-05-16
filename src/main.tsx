import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Home } from './components/pages/Home'
import { QuemSomos } from './components/pages/QuemSomos'
import { Equipe } from './components/pages/Equipe'
import { Cases } from './components/pages/Cases'
import { Blog } from './components/pages/Blog'
import { Contato } from './components/pages/Contato'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPAge } from './components/pages/ErrorPage'
import { Termos } from './components/pages/termos'

import { LanguageContext } from './components/Language/LanguageContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPAge />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />
  },
  {
    path: "/equipe",
    element: <Equipe />
  },
  {
    path: "/cases",
    element: <Cases />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path:"/termos-de-uso-e-politica-de-privacidade",
    element: <Termos />
  }
])

const [language, setLanguage] = useState('pt');

export const changeLanguage = (language: string) => {
  setLanguage(language);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <LanguageContext.Provider value={{ changeLanguage }}>
        <RouterProvider router={router} />
      </LanguageContext.Provider>
  </React.StrictMode>,
)
