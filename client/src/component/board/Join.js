import React, { useState } from "react";
import { insertUser } from "../../API";
import "./style/Join.css";

function Join({ history }) {
  const [values, setValues] = useState({
    id: "",
    pwd: "",
    pwd2: "",
    name: "",
    age: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const check = () => {
  //   if (id.length < 4) return false;
  //   else if (pwd !== pwd2) return false;
  //   else if (name.length === 0) return false;
  //   return true;
  // };

  const onSubmitJoin = (e) => {
    console.log(e);
    e.preventDefault();
    insertUser(values)
      .then(() => {
        alert("회원가입 되었습니다 로그인 하세요.");
        history.push("/board/login");
      })
      .catch((err) => {
        alert("중복 된 아이디가 있습니다.");
        console.error("회원가입 전송 오류!", err);
      });
  };

  return (
    <>
      <main className="board">
        <div className="join-board">
          <div className="head">
            <h1>Member Join </h1>
          </div>

          <form method="POST" onSubmit={onSubmitJoin}>
            <div className="form">
              <input
                type="text"
                name="id"
                autoComplete="off"
                onChange={handleChange}
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
                autoComplete="off"
                onChange={handleChange}
                required
              />
              <label className="label-name">
                <span className="content-name">Password</span>
              </label>
            </div>
            <div className="form">
              <input
                type="Password"
                name="pwd2"
                autocomplete="off"
                onChange={handleChange}
                required
              />
              <label className="label-name">
                <span className="content-name">Password check</span>
              </label>
            </div>
            <div className="form">
              <input
                type="text"
                name="name"
                autocomplete="off"
                onChange={handleChange}
                required
              />
              <label className="label-name">
                <span className="content-name">Name</span>
              </label>
            </div>
            <div className="form">
              <input
                type="number"
                name="age"
                autocomplete="off"
                onChange={handleChange}
                required
              />
              <label className="label-name">
                <span className="content-name">Age</span>
              </label>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default React.memo(Join);
