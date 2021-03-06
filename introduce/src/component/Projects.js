import board_main from "../img/board_main.PNG";
import board_main2 from "../img/board_main2.png";

function Projects() {
  return (
    <div className="project">
      <div className="project_title">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="project_container">
        <table>
          <thead>
            <th>Project_Name</th>
            <th>Skill stack</th>
            <th>Period</th>
            <th>People</th>
          </thead>
          <tbody>
            <tr
              name="react_board"
              onClick={(e) => {
                console.log(e.target.parentNode);
              }}
            >
              <td>React_board</td>
              <td>
                <div>Front : React.js</div>
                <div>Back : Node.js</div>
                <div>DB : MongoDB</div>
              </td>
              <td>2.20 ~ 3.02</td>
              <td>Me only</td>
            </tr>
            <tr name="react_board">
              <td>CloneCoding 텀블벅</td>
              <td>
                <div>Front : React.js</div>
                <div>Back : Spring</div>
                <div>DB : MySQL</div>
              </td>
              <td>12.04 ~ 12.22</td>
              <td>Team(5 people)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="react_board detail">
        <div className="index">
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
        </div>
        <div className="card_slider">
          <div className="card">
            <div className="card_img">
              <p className="intro">
                <h1>Packages</h1>
                <br />
                <br />
                <pre>
                  React.js : React_router_dom, React_Hooks(useEffect, useState,
                  useRef), Axios <br />
                  Node.js : express.js, mongoose, cors, JWT, bcrypt, nodemon,
                  morgan
                </pre>
              </p>
            </div>
            <div className="card_text"></div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_main} alt="asd" />
              <img src={board_main2} alt="asd" />
            </div>
            <div className="card_text">
              <p>board의 메인 화면입니다.</p>
              <p>로그인상태에 따라 화면이 조금 다르게 설정되어 있습니다.</p>
              <p>페이지 네이션이 구현되어 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
