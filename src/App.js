import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { MenuBar } from "./components/MenuBar";
import { InputForm } from "./page/InputForm";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <MenuBar></MenuBar>
      <InputForm></InputForm>
    </div>
  );
}

export default App;
