import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import App from './App.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<App />}>
    <Route path='Home' element = {<Home />}/>
    <Route path='About' element = {<About />}/>
    <Route path='Contact' element = {<Contact />}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
