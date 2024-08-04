import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Homepage from './pages/Homepage';
import AddEmployeePage from './pages/AddEmployeePage';
import ErrorPage from './pages/ErrorPage';
import EmployeeDetailPage from './pages/EmployeeDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/employee/:empId",
    element: <EmployeeDetailPage />,
  },
  {
    path: "/adding-employee",
    element: <AddEmployeePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
