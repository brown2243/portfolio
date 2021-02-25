import React from "react";

function User({ userInfo }) {
  return (
    <>
      {userInfo.name ? (
        <>
          <h3>Hello! {userInfo.name}😎</h3>
          <p>{userInfo.manager === 1 ? "Manager" : "User"} Member</p>
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
