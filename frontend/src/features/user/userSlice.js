import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount,Login,Signup,editProfile, CheckUser } from "./userAPI";

const initialState = {
  value: 0,
  status: "idle",
  userData: null,
  token: null
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
  async ({userData,token,id}) => {
    const response = await editProfile({userData,token,id});
    return response.data;
  }
);
export const SignupAsync = createAsyncThunk(
  "user/signup",
  async (userData) => {
    const response = await Signup(userData);
    return response.data;
  }
);
export const LoginAsync = createAsyncThunk(
  "user/login",
  async (userData) => {
    const response = await Login(userData);
    
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  "user/check",
  async (token) => {
    const response = await CheckUser(token);
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
        state.token=state.userData.token;
      })
      .addCase(LoginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userData = action.payload;
        state.token=state.userData.token;
      })
      .addCase(editProfileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editProfileAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userData = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userData = action.payload;
        state.token=state.userData.token;
      });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

// export const selectCount = (state) => state.counter.value;
export const selectUserData = (state) => state.user.userData;
export const token = (state) => state.user.token;
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
