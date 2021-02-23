import { Route } from "react-router-dom";
import Home from "./component/Home";
import { Board, Join, Login, Write } from "./component/board/index";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/board" component={Board} />
      <Route exact path="/board/Login" component={Login} />
      <Route exact path="/board/Join" component={Join} />
      <Route exact path="/board/write" component={Write} />
    </>
  );
}

export default App;
