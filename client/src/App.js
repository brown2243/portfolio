import { Route } from "react-router-dom";
import Home from "./component/Home";
import {
  Board,
  Join,
  Login,
  Write,
  Detail,
  Setting,
} from "./component/board/index";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/board" component={Board} />
      <Route exact path="/board/Login" component={Login} />
      <Route exact path="/board/Join" component={Join} />
      <Route exact path="/board/write" component={Write} />
      <Route exact path="/board/detail/:id" component={Detail} />
      <Route exact path="/board/setting" component={Setting} />
    </>
  );
}

export default App;
