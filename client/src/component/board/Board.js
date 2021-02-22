import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Board.css";
import { fetchByToken } from "../../API";
import User from "./parts/User";

function Board() {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("board useEffect");
    const TOKEN = localStorage.getItem("JWT");
    if (TOKEN) {
      fetchByToken({ token: TOKEN })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <main className="board">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <User name={user.name} />
            </div>

            <div className="links">
              <div className="link">
                <h2>Streams</h2>
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
            <Link to="board/login">
              <div className="pro">
                <h2>Join or Login</h2>
              </div>
            </Link>
          </div>

          <div className="games">
            <div className="status">
              <h1>Search Game</h1>
              <input type="text" />
            </div>

            <div className="cards">
              <div className="card">
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                </div>
              </div>

              <div className="card">
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                </div>
              </div>

              <div className="card">
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                </div>
              </div>

              <div className="card">
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                </div>
              </div>
            </div>
            <div>페이지네이션</div>
          </div>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}

export default Board;
