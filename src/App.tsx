import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './components/pages/Home'
import { QuemSomos } from './components/pages/QuemSomos'
import { Equipe } from './components/pages/Equipe'
import { Cases } from './components/pages/Cases'
import { Blog } from './components/pages/Blog'
import { Contato } from './components/pages/Contato'
import { ErrorPAge } from './components/pages/ErrorPage'
import { Termos } from './components/pages/termos'
import { Nav } from './components/Nav'
import './styles/main.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPAge />
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
      path: "/termos-de-uso-e-politica-de-privacidade",
      element: <Termos />
    },
    {
      path: "/nav",
      element: <Nav />
    },
  ]);

  return (
    <div className=''>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
