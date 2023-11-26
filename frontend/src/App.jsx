import { Login } from "./features/user/components/Login";
import { Signup } from "./features/user/components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EditProfile from "./features/user/components/EditProfile";
import Home from "./pages/Home";
import PostComment from "./pages/components/PostComment";

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
    element: <Home/>,
  },
  {
    path: "/editprofile",
    element: <EditProfile></EditProfile>,
  },
  {
    path:"/notification",
    element:<Home/>
  }
  ,{
    path:"/search",
    element:<Home/>
  }
  ,{
    path:"/create",
    element:<Home/>
  }
  ,
  {
    path:"/post/id:",
    element:<PostComment/>
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
