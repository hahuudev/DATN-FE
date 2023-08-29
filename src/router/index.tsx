import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Pitch from '../pages/Pitch';

const router = createBrowserRouter([
    {
        path: '/', element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/pitch', element: <Pitch /> },
        ],
    },
]);

export default router;
