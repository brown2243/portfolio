import React from "react";

function Post({ idx, post }) {
  const onClickDetail = (e) => {};
  return (
    <>
      <div className="card">
        <div className="card-info">
          <h2>
            {idx + 1}. {post.title}
          </h2>
          <p>{post.writer}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
