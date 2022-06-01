import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    users: [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "12345",
        passwordConfirm: "12345",
        adminRole: true,
      },
    ],
    error: "",
    isUser: false,
    isAdmin: false,
  },
  reducers: {
    register: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    loginUser: (state, action) => {
      state.isUser = state.users.some(
        (person) =>
          person.name === action.payload.name &&
          person.password === action.payload.password
      );
      state.isAdmin = state.users.some((person) => person?.adminRole);
    },
  },
});

export const { register, loginUser } = loginSlice.actions;

export const usersSelector = (state) => state.login.users;
export const adminsSelector = (state) => state.login.admins;
export const isUserSelector = (state) => state.login.isUser;
export const isAdminSelector = (state) => state.login.isAdmin;
export const errorSelector = (state) => state.login.error;

export default loginSlice.reducer;
