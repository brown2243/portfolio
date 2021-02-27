import React from "react";
import { useHistory } from "react-router-dom";

function Post({ post }) {
  const history = useHistory();
  const onClickDetail = (e) => {
    e.preventDefault();
    history.push(`board/detail/${post._id}`);
  };
  return (
    <>
      <div className="card" onClick={onClickDetail}>
        <div className="card-info">
          <h2>{post.title}</h2>
          <p>작성자 {post.writer}님</p>
        </div>
      </div>
    </>
  );
}

export default React.memo(Post);
