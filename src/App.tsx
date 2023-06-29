import { RouterProvider } from "react-router-dom";
import router from "./router";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#00b96b",
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
