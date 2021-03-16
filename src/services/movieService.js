import http from "./httpService";

const apiEndpoint = "/products";

// function movieUrl(id) {
//   return `${apiEndpoint}/${id}`;
// }

export function getProducts(variables) {
  return http.post(apiEndpoint, variables);
}
export function uploadProducts(variables) {
  return http.post(apiEndpoint, variables);
}

// export function getMovie(movieId) {
//   return http.get(movieUrl(movieId));
// }

// export function saveMovie(movie) {
//   if (movie._id) {
//     const body = { ...movie };
//     delete body._id;
//     return http.put(movieUrl(movie._id), body);
//   }

//   return http.post(apiEndpoint, movie);
// }

// export function deleteMovie(movieId) {
//   return http.delete(movieUrl(movieId));
// }
