// import { LOGIN_API } from "../config";
// import { authActions } from "./auth-slice";
// import http from "./httpService";

// const tokenKey = "token";

// http.setJwt(getJwt());

// export const login = (email, password) => {
//   return async (dispatch) => {
//     const { data: jwt } = await http.post(LOGIN_API, { email, password });
//     localStorage.setItem(tokenKey, jwt);
//     dispatch(
//       authActions.setAuth({
//         user: jwt,
//       })
//     );
//   };
// };

// export const loginWithJwt = (jwt) => {
//   return async (dispatch) => {
//     localStorage.setItem(tokenKey, jwt);
//     dispatch(
//       authActions.setAuth({
//         user: jwt,
//       })
//     );
//   };
// };

// export const logout = (jwt) => {
//   return async (dispatch) => {
//     localStorage.removeItem(tokenKey);
//     dispatch(
//       authActions.setAuth({
//         user: null,
//       })
//     );
//   };
// };

// export const getJwt = () => {
//   localStorage.getItem(tokenKey);
// };
