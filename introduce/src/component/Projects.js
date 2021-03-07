import board_main2 from "../img/board_main2.png";
import board_main_login from "../img/board_main_login.png";
import board_main_min from "../img/board_main_min.png";
import board_main_min1 from "../img/board_main_min1.png";
import board_login from "../img/board_login.png";
import board_join from "../img/board_join.png";
import board_write from "../img/board_write.png";
import board_detail from "../img/board_detail.png";
import board_setting from "../img/board_setting.PNG";
import board_setting1 from "../img/board_setting1.PNG";
//
import clone_main from "../img/clone_main.png";
import clone_login from "../img/clone_login.png";
import clone_join from "../img/clone_join.png";
import clone_setting from "../img/clone_setting.png";
import clone_setting1 from "../img/clone_setting1.png";
//
import arrow from "../img/arrow.svg";
import arrow2 from "../img/arrow2.svg";

function Projects() {
  let percent = 0;
  function goDown(e) {
    if (percent < -80) return;
    percent -= 16.7;
    const slider = e.target.parentNode.parentNode.parentNode.lastChild;
    slider.style.transform = `translateY(${percent}%)`;
  }
  function goUp(e) {
    if (percent >= 0) return;
    percent += 16.7;
    const slider = e.target.parentNode.parentNode.parentNode.lastChild;
    slider.style.transform = `translateY(${percent}%)`;
  }

  function viewDetail(e) {
    const detail = document.querySelector(
      `.${e.target.parentNode.getAttribute("name")}`
    );
    detail.style.zIndex = "1";
    detail.style.animation = `1s scaleUp ease forwards`;
  }

  function closeDetail(e) {
    const detail = e.target.parentNode.parentNode.parentNode.parentNode;
    detail.style.zIndex = "-1";
    detail.style.animation = `1s scaleDown ease forwards`;
    percent = 0;
    const sliders = document.querySelectorAll(".card_slider");
    sliders.forEach((slider) => {
      slider.style.transform = `translateY(${percent}%)`;
    });
  }

  return (
    <div className="project">
      <div className="project_title">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="project_container">
        <table>
          <thead>
            <tr>
              <th>Project_Name</th>
              <th>Skill stack</th>
              <th>Period</th>
              <th>People</th>
            </tr>
          </thead>
          <tbody>
            <tr name="react_board" onClick={viewDetail}>
              <td>React_board</td>
              <td>
                <div>Front : React.js</div>
                <div>Back : Node.js</div>
                <div>DB : MongoDB</div>
              </td>
              <td>2.20 ~ 3.02</td>
              <td>Me only</td>
            </tr>
            <tr name="clone_coding" onClick={viewDetail}>
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
        <div className="btnbox">
          <div className="up">
            <img src={arrow} onClick={goUp} alt="" />
          </div>
          <div className="down">
            <img src={arrow} onClick={goDown} alt="" />
          </div>
        </div>
        <div className="card_slider" onClick={closeDetail}>
          <div className="card">
            <div className="box">
              <p className="intro">
                <b>Packages</b>
                <br />
                <br />
                React.js : React_router_dom, React_Hooks(useEffect, useState,
                useRef), Axios <br />
                Node.js : express.js, mongoose, cors, JWT, bcrypt, nodemon,
                morgan
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_main2} alt="" />
              <img src={board_main_login} alt="" />
            </div>
            <div className="card_text">
              <p>board의 메인 화면입니다.</p>
              <p>로그인상태에 따라 화면이 조금 다르게 설정되어 있습니다.</p>
              <p>페이지 네이션이 구현되어 있습니다.</p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_main_min} alt="" />
              <img src={board_main_min1} alt="" />
            </div>
            <div className="card_text">
              <p>
                서버에서 게시글 4개씩 보내주는 페이지네이션이 구현되어 있습니다.
              </p>
              <p>
                창의 크기가 작을 때 Dashboard를 햄버거 안으로 집어넣고 <br />
                클릭하면 보이도록 설정했습니다
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_login} alt="" />
              <img src={board_join} alt="" />
            </div>
            <div className="card_text">
              <p>
                비로그인 상태일 때 하단에 Join or Login 버튼을 누르면
                Login창으로 이동합니다.
              </p>
              <p>
                회원가입 시 비밀번호는 bcrypt 암호화되고 그외는 입력한 대로 DB에
                등록됩니다.
              </p>
              <p>
                로그인에 성공하면 서버에서 JWT를 발급해 로컬스토리지에
                저장합니다.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_write} alt="" />
              <img src={board_detail} alt="" />
            </div>
            <div className="card_text">
              <p>
                Login 상태일 때 상단 오른쪽에 write버튼을 누르면 위의 창에서
                게시글을 작성할 수 있습니다.
              </p>
              <p>
                작성 된 게시글은 글의 작성자와 로그인 된 유저가 동일할 때 수정,
                삭제버튼이 생깁니다.
              </p>
              <p>
                수정은 Update를 누르고 내용을 수정한 뒤 POST 버튼, 삭제는
                Delete버튼입니다.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img src={board_setting} alt="" />
              <img src={board_setting1} alt="" />
            </div>
            <div className="card_text">
              <p>
                Login 상태일 때 상단의 member setting을 누르면 설정창으로
                이동합니다.
              </p>
              <p>
                수정 버튼을 누르면, 수정중이라고 바뀌고 수정할 수 있는 상태가
                됩니다.
              </p>
              <p>수정을 마무리하면 변경버튼을 누르면 됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="clone_coding detail">
        <div className="btnbox">
          <div className="up">
            <img src={arrow2} onClick={goUp} alt="" />
          </div>
          <div className="down">
            <img src={arrow2} onClick={goDown} alt="" />
          </div>
        </div>
        <div className="card_slider" onClick={closeDetail}>
          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_main} alt="" />
            </div>
            <div className="card_text">
              <p>텀블벅 메인 화면입니다.</p>
              <p>이미지 슬라이더가 자동으로 넘어가게 되어있습니다.</p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_login} alt="" />
            </div>
            <div className="card_text">
              <p>
                로그인 화면 입니다. 이때는 비밀번호 암호화나, JWT없이
                로컬스토리지로만 구현했습니다.
              </p>
              <p>
                아무래도 클론코딩이니까 보이는 화면을 동일하게 만드는데 초점을
                뒀었습니다.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_join} alt="" />
            </div>
            <div className="card_text">
              <p>
                아이디는 Email 형식으로, 비밀번호도 몇자 이상이어야만 등록되도록
                만들었습니다.
              </p>
              <p>FB, Naver Login은 버튼만 만들고 구현은 안했습니다.</p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_setting} alt="" />
            </div>
            <div className="card_text">
              <p>
                Login 상태일 때 상단 오른쪽에 write버튼을 누르면 위의 창에서
                게시글을 작성할 수 있습니다.
              </p>
              <p>
                작성 된 게시글은 글의 작성자와 로그인 된 유저가 동일할 때 수정,
                삭제버튼이 생깁니다.
              </p>
              <p>
                수정은 Update를 누르고 내용을 수정한 뒤 POST 버튼, 삭제는
                Delete버튼입니다.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_setting1} alt="" />
            </div>
            <div className="card_text">
              <p>Login 상태일 때 상단의 프로필 이미지를 누르면 이동합니다.</p>
              <p>
                각각 정보에 변경을 누르고 즉각적으로 수정할 수 있게
                구현했습니다.
              </p>
              <p>Material-UI의 Tabbar를 가져와서 구현했습니다.</p>
            </div>
          </div>

          <div className="card">
            <div className="card_img">
              <img className="one" src={clone_setting1} alt="" />
            </div>
            <div className="card_text">
              <p>윗 슬라이드와 같습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
