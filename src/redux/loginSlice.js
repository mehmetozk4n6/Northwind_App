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
    userName: "",
  },
  reducers: {
    register: (state, action) => {
      state.users = [
        ...state.users,
        {
          name: action.payload.namer,
          email: action.payload.emailr,
          password: action.payload.passwordr,
          passwordConfirm: action.payload.passwordConfirmr,
        },
      ];
    },
    loginUser: (state, action) => {
      state.users.forEach((person) => {
        console.log(person.name);
        console.log(person.password);
        if (
          person.name === action.payload.namel &&
          person.password === action.payload.passwordl
        ) {
          state.isUser = true;
          state.userName = person.name;
          state.isAdmin = person.hasOwnProperty("adminRole");
        }
      });
    },
    logoutUser: (state, action) => {
      state.isUser = false;
      state.isAdmin = false;
    },
  },
});

export const { register, loginUser, logoutUser } = loginSlice.actions;

export const usersSelector = (state) => state.login.users;
export const adminsSelector = (state) => state.login.admins;
export const isUserSelector = (state) => state.login.isUser;
export const isAdminSelector = (state) => state.login.isAdmin;
export const errorSelector = (state) => state.login.error;
export const userNameSelector = (state) => state.login.userName;

export default loginSlice.reducer;
