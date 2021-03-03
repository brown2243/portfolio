import "./App.css";

window.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.parentNode);
});

function Skill() {
  return (
    <>
      {/* <div className="sticky">hihi</div> */}
      <div className="skill">
        Learn Skill
        <div className="icons_container">
          <div className="icon_container">
            <div className="icon html"></div>
          </div>
          <div className="icon_container">
            <div className="icon css"></div>
          </div>
          <div className="icon_container">
            <div className="icon js"></div>
          </div>
          <div className="icon_container">
            <div className="icon react"></div>
          </div>
          <div className="icon_container">
            <div className="icon nodejs"></div>
          </div>
          <div className="icon_container">
            <div className="icon python"></div>
          </div>
          <div className="icon_container">
            <div className="icon">etc</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
