import React, { useEffect, useRef, useState } from "react";
import "./style/Write.css";
import { fetchByToken, updateUser, deleteUser } from "../../API";
import Dashboard from "./parts/Dashboard";

function Setting({ history }) {
  const [user, setUser] = useState({});
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [pwd, setpwd] = useState("");
  const [cnt, setCnt] = useState(0);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const pwdRef = useRef(null);

  useEffect(() => {
    console.log("Setting useEffect");
    // user
    const TOKEN = localStorage.getItem("JWT");
    fetchByToken({ token: TOKEN })
      .then((res) => {
        setUser(res.data);
        setname(res.data.name);
        setage(res.data.age);
      })
      .catch((err) => console.log(err));
  }, [cnt]);

  const changeName = (e) => setname(e.target.value);
  const changeAge = (e) => setage(e.target.value);
  const changePwd = (e) => setpwd(e.target.value);

  // 수정 토글 버튼
  const onClickChange = (e) => {
    let ref;
    e.target.classList.toggle("clicked");
    if (e.target.name === "name") ref = nameRef;
    if (e.target.name === "age") ref = ageRef;
    if (e.target.name === "pwd") ref = pwdRef;

    if (ref.current.readOnly) {
      ref.current.readOnly = false;
      ref.current.focus();
    } else {
      ref.current.readOnly = true;
      if (e.target.name === "pwd") {
        // eslint-disable-next-line no-eval
        eval(`set${e.target.name}("")`);
      } else {
        // eslint-disable-next-line no-eval
        eval(`set${e.target.name}("${user[e.target.name]}")`);
      }
    }
  };

  // 변경 버튼
  const onClickUpdate = (e) => {
    if (!window.confirm("변경하시겠습니까?")) return;
    let ref;
    const Name = e.target.name;
    // eslint-disable-next-line no-eval
    const Value = eval(e.target.name);
    if (Name === "name") ref = nameRef;
    if (Name === "age") ref = ageRef;
    if (Name === "pwd") ref = pwdRef;

    if (ref.current.readOnly) {
      return alert("수정 버튼을 눌러주세요.");
    }
    if (Value.length === 0) {
      return alert("입력 값이 없습니다.");
    }
    if (Value === user[Name]) {
      return alert("입력 값이 기존 값과 같습니다.");
    }

    console.log("전송시작");
    updateUser([user._id, Name, Value])
      .then((res) => {
        console.log("전송성공", res.data);
        setCnt((prev) => prev + 1);
        ref.current.readOnly = true;
        e.target.previousSibling.classList.remove("clicked");
      })
      .catch((err) => console.log("전송실패"));
  };

  // 계정 삭제 버튼
  function deleteUserBtn(e) {
    e.preventDefault();
    if (window.confirm("계정을 삭제하시겠습니까?")) {
      console.log("계정삭제");
      deleteUser({ id: user._id })
        .then(() => console.log("계정 삭제 성공"))
        .catch(() => console.log("계정 삭제 실패"));
      history.push("/board");
      // localStorage.clear()
    } else {
      console.log("계정 삭제 취소");
    }
  }

  return (
    <>
      <main className="board">
        <section className="glass">
          <Dashboard user={user} />

          <div className="board">
            <div className="box"></div>
            <div className="board-title">
              <div className="Setting_box">
                <div className="Setting_title">
                  <h1>Setting</h1>
                  <div className="delete_box">
                    <button className="delete" onClick={deleteUserBtn}>
                      delete
                    </button>
                  </div>
                </div>

                <div className="box">
                  <p>Name :</p>
                  <input
                    ref={nameRef}
                    className="setting"
                    type="text"
                    autoComplete="off"
                    onChange={changeName}
                    value={name}
                    name="name"
                    readOnly
                  />

                  <button
                    name="name"
                    className="setting_btn update"
                    onClick={onClickChange}
                  >
                    수정
                  </button>
                  <button
                    name="name"
                    className="setting_btn"
                    onClick={onClickUpdate}
                  >
                    변경
                  </button>
                </div>

                <div className="box">
                  <p>Age :</p>
                  <input
                    name="age"
                    ref={ageRef}
                    className="setting"
                    type="number"
                    autoComplete="off"
                    onChange={changeAge}
                    value={age}
                    readOnly
                  />

                  <button
                    name="age"
                    className="setting_btn update"
                    onClick={onClickChange}
                  >
                    수정
                  </button>
                  <button
                    name="age"
                    className="setting_btn"
                    onClick={onClickUpdate}
                  >
                    변경
                  </button>
                </div>

                <div className="box">
                  <p>Pwd :</p>
                  <input
                    name="pwd"
                    ref={pwdRef}
                    className="setting"
                    type="text"
                    autoComplete="off"
                    onChange={changePwd}
                    value={pwd}
                    placeholder="비밀번호는 암호화 되어 있습니다."
                    readOnly
                  />
                  <button
                    name="pwd"
                    className="setting_btn update"
                    onClick={onClickChange}
                  >
                    수정
                  </button>
                  <button
                    name="pwd"
                    className="setting_btn"
                    onClick={onClickUpdate}
                  >
                    변경
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default React.memo(Setting);
