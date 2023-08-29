import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import AdminLayout from '~/layouts/AdminLayout';
import Home from '~/pages/Home';
import Dashboard from '~/pages/Admin/Dashboard';
import Pitch from '~/pages/Pitch/Pitch';
import PitchManagement from '~/pages/Admin/PitchManagement';
import PitchAdd from '~/pages/Admin/PitchAdd/PitchAdd';
import PitchUpdate from '~/pages/Admin/PitchUpdate/PitchUpdate';

const router = createBrowserRouter([
    // Client
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/pitch', element: <Pitch /> },
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
            {
                path: 'pitch',
                children: [
                    { index: true, element: <PitchManagement /> },
                    { path: 'add', element: <PitchAdd /> },
                    { path: 'update/:id', element: <PitchUpdate /> },
                ],
            },
        ],
    },
]);

export default router;
