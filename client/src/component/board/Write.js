import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Write.css";
import { fetchByToken, insertPost } from "../../API";
import User from "./parts/User";

function Write({ history }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("write useEffect");
    const TOKEN = localStorage.getItem("JWT");
    if (TOKEN) {
      fetchByToken({ token: TOKEN })
        .then((res) => {
          setUser(res.data);
          console.log(user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onClickLogout = (e) => {
    localStorage.clear();
    window.location.replace("/board");
  };

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
          <div className="dashboard">
            <div className="user">
              <User userInfo={user} />
            </div>

            <div className="links">
              <div className="link">
                <Link to="/board">
                  <h2>Board</h2>
                </Link>
              </div>
              <div className="link">
                <h2>Games</h2>
              </div>
              <div className="link">
                <h2>New</h2>
              </div>
              <div className="link">
                <h2>Library</h2>
              </div>
            </div>
            {/* 로그인 */}
            {user ? (
              <div className="pro" onClick={onClickLogout}>
                <h2>LogOut!</h2>
              </div>
            ) : (
              <Link to="/board/login">
                <div className="pro">
                  <h2>Join or Login!</h2>
                </div>
              </Link>
            )}
          </div>
          <form method="POST" onSubmit={writePost}>
            <div className="board">
              <div className="board-title">
                <div>
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
                  <button type="submit">POST</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default Write;
