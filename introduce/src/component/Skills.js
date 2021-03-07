function Skills() {
  function clickIcon(e) {
    document.querySelector(".skill").style.animation =
      "blurOn 1s ease forwards";
    document.querySelector(".skill").style.pointerEvents = "none";
    const detail = document.querySelector(
      `#detail_${e.target.getAttribute("name")}`
    );
    detail.style.animation = "pop_up 1s ease forwards";
  }

  function clickDetail(e) {
    document.querySelector(".skill").style.animation =
      "blurOff 1s ease forwards";
    document.querySelector(".skill").style.pointerEvents = "auto";
    e.target.style.animation = "pop_down 1s ease forwards";
  }

  return (
    <>
      <div className="skill">
        <div className="title">
          <h1>Skills</h1>
          <hr />
        </div>
        <div className="icons_container">
          <div className="icon_container">
            <div name="html" className="icon html" onClick={clickIcon}></div>
          </div>
          <div className="icon_container">
            <div name="css" className="icon css" onClick={clickIcon}></div>
          </div>
          <div className="icon_container">
            <div name="js" className="icon js" onClick={clickIcon}></div>
          </div>
          <div className="icon_container">
            <div name="react" className="icon react" onClick={clickIcon}></div>
          </div>
        </div>
        <div className="icons_container">
          <div className="icon_container">
            <div
              name="nodejs"
              className="icon nodejs"
              onClick={clickIcon}
            ></div>
          </div>
          <div className="icon_container">
            <div
              name="python"
              className="icon python"
              onClick={clickIcon}
            ></div>
          </div>
          <div className="icon_container">
            <div name="etc" className="icon etc" onClick={clickIcon}>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="detail_html" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head html">
          <h3>HTML</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>1. 시멘틱태그를 적절하게 사용할 수 있습니다.</li>
            <li>2. Emmet문법을 사용해 HTML문서를 작성할 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_css" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head css">
          <h3>CSS</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>
              1. CSS에서 사용되는 단위들(px,em,rem,vh,vw..)을 이해하고 있습니다.
            </li>
            <li>2. At rule 문법을 사용해 애니메이션을 만들 수 있습니다.</li>
            <li>3. At rule 문법을 사용해 반응형 웹을 만들 수 있습니다.</li>
            <li>4. Flex-box, Grid를 사용하여 레이아웃을 잡을 수 있습니다.</li>
            <li>5. SCSS를 사용할 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_js" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head js">
          <h3>JavaScripts</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>1. JS의 Event_loop를 이해하고 있습니다.</li>
            <li>2. ES6 문법을 사용 및 활용할 수 있습니다.</li>
            <li>3. Web API를 사용해 DOM 조작을 할 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_react" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head react">
          <h3>React.js</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>1. Class형 Component를 작성할 수 있습니다.</li>
            <li>2. Function형 Componenet를 작성할 수 있습니다.</li>
            <li>3. Props와 State를 이해하고 있습니다.</li>
            <li>4. React_Hook을 사용할 수 있습니다.</li>
            <li>5. Component의 Life Cycle을 이해하고 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_nodejs" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head nodejs">
          <h3>Node.js</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>
              1. Express의 미들웨어를 활용해 restful한 서버를 만들 수 있습니다.
            </li>
            <li>2. CORS 라이브러리로 CORS error를 해결할 수 있습니다.</li>
            <li>3. Mongoose를 사용할 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_python" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head python">
          <h3>Python</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>1. 프로그래밍 첫 입문 언어라서 넣었습니다.</li>
            <li>2. 알고리즘 공부를 파이썬으로 시작 했었습니다.</li>
            <li>3. 지금은 JS로 하고 있습니다.</li>
          </ul>
        </div>
      </div>

      <div id="detail_etc" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head etc">
          <h3>Etc...</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>1. DB는 Oracle, MySQL, MongoDB 사용해봤습니다.</li>
            <li> 간단한 SQL문 작성할 수 있습니다.</li>
            <li>2. Java 기본문법을 알고 있고, JSP, Spring 사용해봤습니다.</li>
            <br />
            <li>
              보고 계신 자기소개 페이지는 react로 생성하긴 했지만 React의 DOM
              조작방식(useRef)대신 바닐라JS로 DOM조작 하는 방식으로
              만들어졌습니다.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
