import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import User from './Components/User.jsx'

const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<App />}>
  <Route path = '/user/' element = {<User />}>
    <Route path = ':userId' element = {<User />}/>
  </Route>
</Route>))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
