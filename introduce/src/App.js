import "./App.css";
import Header from "./component/Header";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function scrollFooter(scrollY, heightFooter) {
  // console.log("onScrollFooter");
  // console.log(scrollY);

  if (scrollY >= heightFooter) {
    // console.log("scrollY >= heightFooter");
    document.getElementsByTagName("footer")[0].style.bottom = "0px";
  } else {
    // console.log("scrollY < heightFooter");
    document.getElementsByTagName(
      "footer"
    )[0].style.bottom = `-${heightFooter}px`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;
  const footerHeight = document.getElementsByTagName("footer")[0].scrollHeight;
  const heightDocument =
    windowHeight +
    document.getElementsByClassName("content")[0].scrollHeight +
    footerHeight -
    20;
  // console.log(windowHeight, footerHeight);
  document.getElementById(
    "scroll-animate"
  ).style.height = `${heightDocument}px`;
  document.getElementById(
    "scroll-animate-main"
  ).style.height = `${heightDocument}px`;
  document.getElementsByTagName("header")[0].style.height = `${windowHeight}px`;
  document.getElementsByTagName(
    "header"
  )[0].style.lineHeight = `${windowHeight}px`;
  document.getElementsByClassName(
    "wrapper-parallax"
  )[0].style.marginTop = `${windowHeight}px`;
  scrollFooter(window.scrollY, footerHeight);

  window.onscroll = () => {
    // console.log("onScroll");
    const scroll = window.scrollY;
    document.getElementById("scroll-animate-main").style.top = `-${scroll}px`;
    document.getElementsByTagName(
      "header"
    )[0].style.backgroundPositionY = `50 - ${(scroll * 100) / heightDocument}%`;

    scrollFooter(scroll, footerHeight);
  };
});

function App() {
  return (
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <Header />
          <section className="content">
            <Skills />
            <Projects />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
