import { Login } from "./features/user/components/Login";
import { Signup } from "./features/user/components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostLayout from "./pages/components/PostLayout";
import Navbar from "./pages/components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/components/EditProfile";
import Home from "./pages/Home";
import Notification from "./pages/components/Notification";
import Search from "./pages/components/Search";
import Create from "./pages/components/Create";

// Usage

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/editprofile",
    element: <EditProfile></EditProfile>,
  },
  {
    path:"/notification",
    element:<Notification/>
  }
  ,{
    path:"/search",
    element:<Search/>
  }
  ,{
    path:"/create",
    element:<Create/>
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
