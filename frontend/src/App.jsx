import { Login } from "./features/user/components/Login";
import { Signup } from "./features/user/components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

import EditPofile from "./pages/EditProfile";
import PostLayout from "./pages/components/PostLayout";
import Navbar from "./pages/Navbar";

const textPost = {
  firstName: 'Ayush Gupta',
  icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
  content: 'This is a text post.',
  contentType: 'text',
  replies: 4,
  likes: 5,
};

const photoPost = {
  firstName: 'Ayush Gupta',
  icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
  content: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
  contentType: 'photo',
  replies: 4,
  likes: 5,
};

const videoPost = {
  firstName: 'Ayush Gupta',
  icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
  content: 'https://www.youtube.com/shorts/D3BtA7hol6I?feature=share',
  contentType: 'video',
  replies: 4,
  likes: 5,
};

// Usage


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
  {

    path: "/editprofile",
    element: <EditPofile></EditPofile>,
  },
  {
    path: "/post",
    element: <>
    <PostLayout data={textPost} />
    <PostLayout data={photoPost}/>
    <PostLayout data={videoPost}/>
    </>
  }
  ,{
    path:"/navbar",
    element: <Navbar/>
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
