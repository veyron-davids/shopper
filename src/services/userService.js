
import http from "./httpService";

const apiEndPoint = "/users/register";

export function register(user) {
  return http.post(apiEndPoint, {
    FirstName: user.FirstName,
    LastName: user.LastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: user.password,
  });
}
