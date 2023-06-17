import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Notification from "./Pages/notification/Notification";
import Message from "./Pages/message/Message";
import Shop from "./Pages/Shop/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home />, // Create error element
    },
    {
        path: "/settings",
        element: <Settings />,
    },
    {
        path: "/notification",
        element: <Notification />,
    },
    {
        path: "/message",
        element: <Message />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} /> 
        </>
    );
};

export default App;

