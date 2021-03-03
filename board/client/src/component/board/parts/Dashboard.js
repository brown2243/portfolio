import React, { useRef } from "react";
import { Link } from "react-router-dom";
import User from "./User";

function Dashboard({ user }) {
  const hamburgerRef = useRef(null);
  const linksRef = useRef(null);
  const proRef = useRef(null);
  const onClickBar = (e) => {
    console.log("bar");
    linksRef.current.classList.toggle("show");
    proRef.current.classList.toggle("show");
    hamburgerRef.current.classList.toggle("toggle");
  };
  const onClickLogout = (e) => {
    localStorage.clear();
    window.location.replace("/board");
  };
  return (
    <>
      <div className="dashboard">
        <div className="user">
          <div ref={hamburgerRef} className="hamburger" onClick={onClickBar}>
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
        {user.id ? (
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
    </>
  );
}

export default React.memo(Dashboard);
