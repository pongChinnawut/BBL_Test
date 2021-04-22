import { Route, Switch } from "react-router-dom";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
function App(props) {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Page1}></Route>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </Switch>
    </div>
  );
}

export default App;
