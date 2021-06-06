import { Route, Switch } from "react-router";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { MenuBar } from "./components/MenuBar";
import { InputForm } from "./page/InputForm";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <MenuBar></MenuBar>
      <Switch>
        <Route path="/faq"></Route>
        <Route path="/">
          <InputForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
