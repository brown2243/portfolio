import React, { useEffect, useState } from "react";
import "./style/Write.css";
import { fetchByToken, insertPost } from "../../API";
import Dashboard from "./parts/Dashboard";

function Write({ history }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("write useEffect");
    const TOKEN = localStorage.getItem("JWT");
    if (TOKEN) {
      fetchByToken({ token: TOKEN })
        .then((res) => {
          if (!user._id) setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const writePost = (e) => {
    console.log("writePost");
    e.preventDefault();

    // 이부분 나중에 ref로 변경하자
    const post = {
      writer: user.id,
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    };
    console.log("post is", post);
    insertPost(post)
      .then(() => {
        console.log("성공");
      })
      .catch((err) => console.log("실패", err));
    history.goBack();
  };

  return (
    <>
      <main className="board">
        <section className="glass">
          <Dashboard user={user} />

          <div className="board">
            <form method="POST" onSubmit={writePost}>
              <div className="box"></div>
              <div className="board-title">
                <div className="write_box">
                  <h1>Title</h1>
                  <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    className="title"
                    required
                  />
                  <textarea
                    type="text"
                    autoComplete="off"
                    id="content"
                    required
                  />
                  <div className="write_btn_box">
                    <button className="write_btn" type="submit">
                      POST
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default React.memo(Write);
