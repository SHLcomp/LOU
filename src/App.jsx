import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home  from './pages/Home'
import CaseStudies from './components/casestudies/CaseStudies'
import ErrorPage from './pages/ErrorPage'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/casestudies',
      element: <CaseStudies />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
