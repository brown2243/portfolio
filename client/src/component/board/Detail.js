import React, { useEffect, useRef, useState } from "react";
import "./style/Write.css";
import {
  fetchByToken,
  fetchPostDetail,
  updatePost,
  deletePost,
} from "../../API";
import Dashboard from "./parts/Dashboard";

function Detail({ history, match }) {
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [doUpdate, setDoUpdate] = useState(false);

  const detail_btn_box = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    console.time("detail time");
    console.log("Detail useEffect");
    // 게시글
    fetchPostDetail({ id: match.params.id })
      .then((res) => {
        setPost(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        // 로그인체크
        const TOKEN = localStorage.getItem("JWT");
        if (TOKEN) {
          fetchByToken({ token: TOKEN })
            .then((response) => {
              setUser(response.data);
              checkUser(response.data.id, res.data.writer);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const checkUser = (id, writer) => {
    if (id !== undefined && id === writer) {
      detail_btn_box.current.classList.remove("id_check");
    }
    console.timeEnd("detail time");
  };

  const changeTitle = (e) => setTitle(e.target.value);
  const changeContent = (e) => setContent(e.target.value);

  // 업데이트
  const doUpdatePost = (e) => {
    e.preventDefault();
    console.log("doUpdatePost");
    if (!doUpdate) {
      setDoUpdate(true);
      titleRef.current.readOnly = false;
      contentRef.current.readOnly = false;
    } else {
      setDoUpdate(false);
      titleRef.current.readOnly = true;
      contentRef.current.readOnly = true;
      setTitle(post.title);
      setContent(post.content);
    }
  };

  // 업데이트 전송
  const sendUpdatePost = () => {
    const send_update = {
      id: post._id,
      title: title,
      content: content,
    };

    updatePost(send_update)
      .then(() => {
        console.log("게시물 수정 성공");
      })
      .catch((err) => console.log("게시물 수정 실패", err));
  };

  // 삭제
  function deletePostCheck(e) {
    e.preventDefault();
    if (window.confirm("post를 삭제하시겠습니까?")) {
      console.log("post 삭제");
      console.log(post);
      deletePost({ id: post._id })
        .then(() => console.log("게시글 삭제 성공"))
        .catch(() => console.log("게시글 삭제 실패"));
      history.push("/board");
    } else {
      console.log("post 삭제 취소");
    }
  }

  return (
    <>
      <main className="board">
        <section className="glass">
          <Dashboard user={user} />

          <div className="board">
            <form method="PATCH">
              <div className="box"></div>
              <div className="board-title">
                <div className="write_box">
                  <div className="head_box">
                    <h1>Title</h1>
                    <p>작성자 : {post.writer} 님</p>
                  </div>
                  <input
                    ref={titleRef}
                    type="text"
                    autoComplete="off"
                    id="title"
                    className="title"
                    value={title}
                    onChange={changeTitle}
                    required
                    readOnly
                  />
                  <textarea
                    ref={contentRef}
                    type="text"
                    autoComplete="off"
                    id="content"
                    value={content}
                    onChange={changeContent}
                    required
                    readOnly
                  />

                  <div ref={detail_btn_box} className="detail_btn_box id_check">
                    {doUpdate ? (
                      <>
                        <button
                          className="write_btn warn"
                          onClick={doUpdatePost}
                        >
                          Cancel
                        </button>
                        <button className="write_btn" onClick={sendUpdatePost}>
                          Post
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="write_btn" onClick={doUpdatePost}>
                          Update
                        </button>
                        <button
                          className="write_btn warn"
                          onClick={deletePostCheck}
                        >
                          Delete
                        </button>
                      </>
                    )}
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

export default React.memo(Detail);
