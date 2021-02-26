import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Board.css";
import Post from "./parts/Post";
import { fetchByToken, fetchAllPost, fetch4Post } from "../../API";
import Dashboard from "./parts/Dashboard";

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
    // 첫 1번 클릭된 채로 시작하는거 안하기로 함
    // setTimeout(() => {
    //   const firstBtn = document.querySelector(".page_btn");
    //   firstBtn.classList.add("active");
    // }, 200);
  }, [postLength, pages]);

  // 페이지 네이션
  const onClickPage = (e) => {
    e.preventDefault();
    let startPost;
    let endPost;
    // 버튼 클릭 된 것 같은 효과
    const btns = document.querySelectorAll(".page_btn");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // post 4개 가져오는 로직
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

  return (
    <>
      <main className="board">
        <section className="glass">
          <Dashboard user={user} />

          <div className="board">
            <div className="board-title">
              <div>
                <h1>Write a Post</h1>
                <input type="text" />
              </div>
              {user ? (
                <Link to="/board/write">
                  <button className="board_write">Write</button>
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
                  <button
                    className="page_btn"
                    key={i}
                    onClick={onClickPage}
                    name={i + 1}
                  >
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

export default React.memo(Board);
