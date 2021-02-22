import React from "react";
import { Link } from "react-router-dom";
import "./style/Board.css";

function Board() {
  return (
    <body>
      <main className="board">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <h3>Dev ST</h3>
              <p>Pro Member</p>
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
    </body>
  );
}

export default Board;
