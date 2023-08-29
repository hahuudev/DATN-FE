import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import AdminLayout from '~/layouts/AdminLayout';
import Home from '~/pages/Home';
import Dashboard from '~/pages/Dashboard';

const router = createBrowserRouter([
    // Client
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    // Admin
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
