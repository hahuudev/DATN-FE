import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import LayoutPage from '../components/layoutPage';
import Pitch from '../pages/Pitch';
import DetailPitch from '../pages/detail-pitch';

const router = createBrowserRouter([
    { path: '/', element: <DefaultLayout />, children: [{ path: '/', element: <Home /> }] },
    { path: '/pitch', element: <LayoutPage />, 
    children: [
        { path: '/pitch', element: <Pitch /> },
        { path: 'detail', element: <DetailPitch />}
    ] },
]);

export default router;
