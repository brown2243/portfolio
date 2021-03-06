function Footer() {
  let check = false;
  const change = (e) => {
    if (check) return;
    check = true;
    const email = document.createElement("h6");
    const contact = document.createElement("h6");
    const git = document.createElement("h6");
    email.textContent = "Email : brown2243@naver.com";
    contact.textContent = "Phone : 010-2406-2243";
    git.textContent = "GitHub : https://github.com/brown2243";
    e.target.appendChild(email);
    e.target.appendChild(contact);
    e.target.appendChild(git);
  };

  return (
    <footer className="Footer">
      <div className="goodbye" onClick={change}>
        <h1>
          <div className="box">
            🤗<span className="write">방문해주셔서 감사합니다!</span>
            <span className="hand">👋</span>
          </div>
        </h1>
      </div>
      <div className="sun">
        <div className="sunlight sunlight1"></div>
        <div className="sunlight sunlight2"></div>
        <div className="sunlight sunlight3"></div>
        <div className="sunlight sunlight4"></div>
        <div className="sunlight sunlight5"></div>
        <div className="sunlight sunlight6"></div>
      </div>
      <div className="cloud cloud1">
        <div className="piece1"></div>
        <div className="piece2"></div>
        <div className="piece3"></div>
      </div>
      <div className="cloud cloud2">
        <div className="piece1"></div>
        <div className="piece2"></div>
        <div className="piece3"></div>
      </div>
      <div className="cloud cloud3">
        <div className="piece1"></div>
        <div className="piece2"></div>
        <div className="piece3"></div>
      </div>
      <div className="ground"></div>
    </footer>
  );
}

export default Footer;
