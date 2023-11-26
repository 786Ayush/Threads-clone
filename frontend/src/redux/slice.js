import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    menu: "home",

}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        home: (state) =>{
            state.menu="home";
        },
        create: (state)=>{
            state.menu=null;
            state.menu="create";
        },
        notification: (state)=>{
            state.menu="notification";
        },
        profile: (state)=>{
            state.menu="profile";
            
        },
        search: (state)=>{
            state.menu="search";
        }
    }
})

export const {home,create,notification,profile,search} =menuSlice.actions

export default menuSlice.reducer;