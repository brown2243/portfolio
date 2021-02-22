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

// function updateUser() {
//   return Axios.put(BOARD);
// }
// function deleteUser() {
//   return Axios.delete(BOARD);
// }
export { loginUser, fetchByToken, insertUser };
