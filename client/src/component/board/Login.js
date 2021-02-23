import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../API";
import "./style/Login.css";

function Login({ history }) {
  const [values, setValues] = useState({
    id: "",
    pwd: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(values.id, values.pwd);
    setValues({ ...values, [name]: value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log("로그인");
    loginUser(values)
      .then((res) => {
        localStorage.setItem("JWT", res.data);
        console.log("로그인 성공");
        history.push("/board");
      })
      .catch((err) => {
        console.error(err);
        console.error("로그인 오류!", err);
      });
  };

  return (
    <>
      <main className="board">
        <div className="login-board">
          <div>
            <h1>Member Login </h1>
          </div>

          <form method="POST" onSubmit={onSubmitLogin}>
            <div className="form">
              <input
                type="text"
                name="id"
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label className="label-name">
                <span className="content-name">ID</span>
              </label>
            </div>

            <div className="form">
              <input
                type="Password"
                name="pwd"
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label className="label-name">
                <span className="content-name">Password</span>
              </label>
            </div>

            <div className="btn-box">
              <button>Login</button>
              <h2>or</h2>
              <Link to="join">
                <button className="link">Sign in</button>
              </Link>
            </div>
          </form>
        </div>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default Login;
