import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'antd/dist/reset.css';
import 'react-toastify/ReactToastify.min.css'
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <RouterProvider router={router} />
            <ToastContainer />
        </ConfigProvider>
    );
}

export default App;
