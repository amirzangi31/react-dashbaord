
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContextProvider'

import Layout from './components/layout/Layout'

import { Dashboard , Charts } from './pages'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/charts",
          element: <Charts />,
        }
      ]
    }
  ])



  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>

  )
}

export default App
