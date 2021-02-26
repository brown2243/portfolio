import React, { useEffect, useRef, useState } from "react";
import "./style/Write.css";
import { fetchByToken, deletePost } from "../../API";
import Dashboard from "./parts/Dashboard";
import SettingUser from "./parts/SettingUser";

function Setting({ history }) {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log("Setting useEffect");
    // user
    const TOKEN = localStorage.getItem("JWT");
    fetchByToken({ token: TOKEN })
      .then((res) => {
        setUser(res.data);
        setName(res.data.name);
        setAge(res.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  // 삭제
  function deletePostCheck(e) {
    e.preventDefault();
    if (window.confirm("계정을 삭제하시겠습니까?")) {
      console.log("계정삭제");
      // console.log(post);
      // deletePost({ id: post._id })
      //   .then(() => console.log("계정 삭제 성공"))
      //   .catch(() => console.log("계정 삭제 실패"));
      history.push("/board");
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
                <h1>Setting</h1>
                <SettingUser name={"Name"} value={name} />
                <SettingUser name={"Age"} value={age} />
                <SettingUser name={"Pwd"} value={""} />
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
