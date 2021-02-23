import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Board.css";
import User from "./parts/User";
import Post from "./parts/Post";
import { fetchByToken, fetchAllPost } from "../../API";

function Board() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("board useEffect");
    fetchAllPost()
      .then((res) => {
        setPosts(res.data.reverse());
      })
      .catch((err) => console.log(err));

    const TOKEN = localStorage.getItem("JWT");
    if (TOKEN) {
      fetchByToken({ token: TOKEN })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
    console.log("posts are", posts);
  }, []);

  const onClickLogout = (e) => {
    localStorage.clear();
    window.location.replace("/board");
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

          <div className="board">
            <div className="board-title">
              <div>
                <h1>Write a Post</h1>
                <input type="text" />
              </div>
              {user ? (
                <Link to="/board/write">
                  <button>Write</button>
                </Link>
              ) : (
                <></>
              )}
            </div>

            <div className="cards">
              {posts.map((post, i) => (
                <Post post={post} idx={posts.length - i - 1} />
              ))}

              <div className="card">
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                </div>
              </div>

              <div>페이지네이션</div>
            </div>
          </div>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default Board;
