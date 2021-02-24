import React from "react";

function Post({ idx, post }) {
  const onClickDetail = (e) => {};
  return (
    <>
      <div className="card">
        <div className="card-info">
          <h2>{post.title}</h2>
          <p>작성자 {post.writer}님</p>
        </div>
      </div>
    </>
  );
}

export default Post;
