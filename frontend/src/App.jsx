import { Login } from "./features/user/components/Login";
import { Signup } from "./features/user/components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EditProfile from "./features/user/components/EditProfile";
import Home from "./pages/Home";
import PostComment from "./pages/components/PostComment";
import Protected from "./features/user/components/Protected";
import UserProfilepage from "./pages/components/UserProfilepage";

// Usage

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
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
    element: (
      <Protected>
        <Home />,
      </Protected>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <Protected>
        <EditProfile></EditProfile>
      </Protected>
    ),
  },
  {
    path: "/notification",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/search",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/create",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/post/id:",
    element: (
      <Protected>
        <PostComment />
      </Protected>
    ),
  },
  {
    path: "/userprofile",
    element:<UserProfilepage/>
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
