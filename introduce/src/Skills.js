import "./App.css";
// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });
function Skills() {
  function clickIcon(e) {
    document.querySelector(".skill").style.animation =
      "blurOn 1s ease forwards";
    document.querySelector(".skill").style.pointerEvents = "none";
    console.log(e.target);
    console.log(e.target.getAttribute("name"));
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
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_css" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head css">
          <h3>CSS</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_js" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head js">
          <h3>JavaScripts</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_react" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head react">
          <h3>React.js</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_nodejs" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head nodejs">
          <h3>Node.js</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_python" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head python">
          <h3>Python</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>

      <div id="detail_etc" className="pop_detail" onClick={clickDetail}>
        <div className="detail_head etc">
          <h3>Etc...</h3>
        </div>
        <div className="detail_body">
          <ul>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
            <li>~~할수있습니다</li>
          </ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          illum tempora, distinctio, laudantium possimus consequuntur nemo
          tenetur officia facere porro deserunt! Autem sit ratione aliquam
          ducimus mollitia vel excepturi?
        </div>
      </div>
    </>
  );
}

export default Skills;
