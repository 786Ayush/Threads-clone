import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCount,
  Login,
  Signup,
  editProfile,
  CheckUser,
  getUserbyId,
  getUserByUsername,
} from "./userAPI";

const initialState = {
  value: 0,
  status: "idle",
  userData: null,
  getuserData: null,
  token: null,
  seachdata: [],
};
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const editProfileAsync = createAsyncThunk(
  "user/editProfile",
  async ({ userData, token, id }) => {
    const response = await editProfile({ userData, token, id });
    return response.data;
  }
);
export const SignupAsync = createAsyncThunk("user/signup", async (userData) => {
  const response = await Signup(userData);
  return response.data;
});
export const LoginAsync = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    try {
      const response = await Login({ username, password });

      if (response.data.token) {
        // Successful authentication
        return response.data;
      } else {
        // Authentication failed
        return { error: "Authentication failed" };
      }
    } catch (error) {
      // Handle API request errors
      return { error: "API request failed" };
    }
  }
);
export const checkUserAsync = createAsyncThunk("user/check", async (token) => {
  const response = await CheckUser(token);
  return response.data;
});

export const getUserbyIdAsync = createAsyncThunk(
  "user/getbyid",
  async (token) => {
    const response = await getUserbyId(token);
    return response.data;
  }
);

export const getUserbyuserNameAsync = createAsyncThunk(
  "user/getbyusername",
  async ({ username, token }) => {
    const response = await getUserByUsername({ username, token });
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(SignupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
        state.token = state.userData?.token;
      })
      .addCase(LoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
        console.log(action.payload);
        console.log(state.userData);
        state.token = state.userData.token ? state.userData.token : null;
        console.log(state.token);
      })
      .addCase(editProfileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProfileAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
        state.token = state.userData?.token;
      })
      .addCase(getUserbyIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserbyIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.getuserData = action.payload;
      })
      .addCase(getUserbyuserNameAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserbyuserNameAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.seachdata = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;
export const token = (state) => state.user.token;
export const selectgetUserbyid = (state) => state.user.getuserData;
export const selectSearchData = (state) => state.user.seachdata;

export default userSlice.reducer;
