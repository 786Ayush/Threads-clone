import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/slice";
import userReducer from "../features/user/userSlice";
import feedsReducer from "../features/feeds/feedsSlice";


export const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    feeds: feedsReducer,
    
  },
});
