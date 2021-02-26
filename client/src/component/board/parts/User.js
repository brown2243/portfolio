import React from "react";
import { Link } from "react-router-dom";

function User({ userInfo }) {
  return (
    <>
      {userInfo.name ? (
        <>
          <h3>Hello! {userInfo.name}😎</h3>

          <Link to="/board/setting">
            <p>Member Setting</p>
          </Link>
        </>
      ) : (
        <h3>
          Hello! <br /> Anonymous
        </h3>
      )}
    </>
  );
}

export default React.memo(User);
