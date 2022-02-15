import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./configs/routes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.HOME}>
          Home Page
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
