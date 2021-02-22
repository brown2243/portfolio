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
function fetchByUser(id) {
  return Axios.get(BOARD + "/" + id);
}
function updateUser() {
  return Axios.put(BOARD);
}
function deleteUser() {
  return Axios.delete(BOARD);
}
export { loginUser, fetchByUser, insertUser };
