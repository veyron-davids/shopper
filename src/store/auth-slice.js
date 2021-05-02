// import { createStore } from "@reduxjs/toolkit";
// import jwtDecode from "jwt-decode";

// const tokenKey = "token";

// const authSlice = createStore({
//   name: "auth",
//   initialState: { user: null },
//   reducers: {
//     setAuth(state, action) {
//       state.user = action.payload;
//     },
//     getCurrentUser(state, action) {
//       try {
//         action.payload = localStorage.getItem(tokenKey);
//         state.user = jwtDecode(state.user);
//       } catch (ex) {
//         return null;
//       }
//     },
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice;
