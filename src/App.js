import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { MenuBar } from "./components/MenuBar";
import { CalculatedResultPage } from "./page/CalculatedResultPage";
import { InputForm } from "./page/InputForm";

function App() {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <MenuBar></MenuBar>
      <Switch>
        <Route path="/faq"></Route>
        <Route path="/result">
          <CalculatedResultPage location={location} />
        </Route>
        <Route path="/">
          <InputForm history={history} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
