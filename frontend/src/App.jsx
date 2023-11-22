import { Login } from "./features/user/components/Login";
import { Signup } from "./features/user/components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-white">Hello world!</div>,
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
    element: <ProfilePage></ProfilePage>,
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
