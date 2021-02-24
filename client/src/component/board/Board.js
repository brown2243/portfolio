import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Board.css";
import User from "./parts/User";
import Post from "./parts/Post";
import { fetchByToken, fetchAllPost, fetch4Post } from "../../API";

function Board() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLength, setPostLength] = useState(0);
  const [pages, setPages] = useState(0);
  const limit = 4;

  useEffect(() => {
    console.log("board useEffect");
    fetchAllPost()
      .then((res) => {
        setPosts(res.data[1].reverse());
        setPostLength(res.data[0]);
        setPages(Math.ceil(res.data[0] / limit));
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
    setTimeout(() => {
      console.log(postLength);
      console.log(pages);
      console.log("posts are", posts);
    }, 1500);
  }, []);

  const onClickLogout = (e) => {
    localStorage.clear();
    window.location.replace("/board");
  };

  const onClickPage = (e) => {
    e.preventDefault();
    let startPost;
    let endPost;
    endPost = postLength - (Number(e.target.name) - 1) * limit;
    startPost = postLength - Number(e.target.name) * limit;
    if (startPost < 0) startPost = 0;
    if (endPost < 4) endPost = 4;
    console.log(e.target.name, startPost, endPost);
    fetch4Post({
      start: startPost,
      end: endPost,
    })
      .then((res) => {
        console.log(res.data.length);
        setPosts(res.data.reverse());
      })
      .catch((err) => console.log(err));
  };
  const hamburgerRef = useRef(null);
  const linksRef = useRef(null);
  const proRef = useRef(null);

  const onClickBar = (e) => {
    console.log("bar");
    linksRef.current.classList.toggle("show");
    proRef.current.classList.toggle("show");
    hamburgerRef.current.classList.toggle("toggle");
  };
  return (
    <>
      <main className="board">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <div
                ref={hamburgerRef}
                className="hamburger"
                onClick={onClickBar}
              >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>

              <User userInfo={user} />
            </div>

            <div ref={linksRef} className="links show">
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
              <div ref={proRef} className="pro show" onClick={onClickLogout}>
                <h2>LogOut!</h2>
              </div>
            ) : (
              <Link to="/board/login">
                <div ref={proRef} className="pro show">
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
                <Post key={i} post={post} />
              ))}
            </div>

            <div className="pagenation">
              {Array(pages)
                .fill()
                .map((v, i) => (
                  <button key={i} onClick={onClickPage} name={i + 1}>
                    {i + 1}
                  </button>
                ))}
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
