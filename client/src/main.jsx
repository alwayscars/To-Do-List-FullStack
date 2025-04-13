import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './Add/Addtodolist.jsx'
// import UpdateUser from './updateuser/Update.jsx'
const route = createBrowserRouter([
  {
  path:"/",
  element: <App />,},
  
    {
      path:"/addtodolist",
      element: <Add/>,
        },
    //     {
    //       path:"/update/:id",
    //       element:<UpdateUser />,
    //     }
]);
createRoot(document.getElementById('root')).render(
   <RouterProvider router={route}></RouterProvider>
)
