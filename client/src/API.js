import Axios from "axios";

// front-end : port 3000
// back-end : port 5000
const BOARD = "http://localhost:5000/board";

function loginUser(user) {
  return Axios.post(BOARD + "/login", user);
}
function insertUser(user) {
  return Axios.post(BOARD + "/user", user);
}
function fetchByToken(token) {
  return Axios.post(BOARD + "/", token);
}
function insertPost(post) {
  return Axios.post(BOARD + "/write", post);
}
function fetchAllPost() {
  return Axios.post(BOARD + "/post");
}

// function updateUser() {
//   return Axios.put(BOARD);
// }
// function deleteUser() {
//   return Axios.delete(BOARD);
// }
export { loginUser, fetchByToken, insertUser };
export { insertPost, fetchAllPost };
