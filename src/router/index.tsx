import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "~/layouts/DefaultLayout";
import Home from "~/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router
